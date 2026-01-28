'use client';

import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { Truck, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle, Package, Check } from 'lucide-react';

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTrackingResult(null);

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', trackingNumber.trim().toUpperCase())
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setError('Tracking ID not found. Please check and try again.');
        } else {
          setError('Error fetching tracking information.');
        }
        return;
      }

      if (data) {
        setTrackingResult(data);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTrackingNumber(value);
    setError('');
  };

  const resetTracking = () => {
    setTrackingNumber('');
    setTrackingResult(null);
    setError('');
  };

  const getTrackingStages = (status: string) => {
    const stages = [
      {
        id: 'picked_up',
        label: 'Picked Up',
        icon: <Package className="w-6 h-6" />
      },
      {
        id: 'in_transit',
        label: 'In Transit',
        icon: <Truck className="w-6 h-6" />
      },
      {
        id: 'out_for_delivery',
        label: 'Out for Delivery',
        icon: <MapPin className="w-6 h-6" />
      },
      {
        id: 'delivered',
        label: 'Delivered',
        icon: <Check className="w-6 h-6" />
      }
    ];

    let currentStageIndex = -1;

    // Map status to stage index
    switch (status) {
      case 'Pickup Pending':
        currentStageIndex = -1; // Before first stage
        break;
      case 'Pick-up-complete':
        currentStageIndex = 0; // Picked Up
        break;
      case 'in_transit':
        currentStageIndex = 1; // In Transit
        break;
      case 'out_for_delivery':
        currentStageIndex = 2; // Out for Delivery
        break;
      case 'delivered':
        currentStageIndex = 3; // Delivered
        break;
      case 'delayed':
        currentStageIndex = 1; // Stuck in transit
        break;
      case 'cancelled':
        currentStageIndex = -1; // No progress
        break;
      default:
        currentStageIndex = 0;
    }

    return stages.map((stage, index) => ({
      ...stage,
      isCompleted: index < currentStageIndex,
      isCurrent: index === currentStageIndex,
      isPending: index > currentStageIndex
    }));
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/tracking.avif"
            alt="Premium freight tracking dashboard"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/30"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center">
                Track Your <span className="text-blue-400">Shipment</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl mx-auto text-center">
                Enter your tracking number to get real-time updates on your shipment
              </p>

              {/* Tracking Input */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 max-w-md mx-auto mb-12 border border-white/20">
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your tracking number"
                      className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      disabled={isLoading}
                    />
                    {trackingNumber && !isLoading && (
                      <button
                        type="button"
                        onClick={resetTracking}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !trackingNumber}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] whitespace-nowrap text-sm md:text-base min-w-[120px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Tracking...
                      </span>
                    ) : 'Track'}
                  </button>
                </form>
                {error && (
                  <div className="mt-2 px-4">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}
              </div>

              {/* Loading State */}
              {isLoading && !trackingResult && (
                <div className="max-w-4xl bg-white/95 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-200 animate-pulse mx-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tracking Result - Pixel Perfect Timeline */}
              {trackingResult && !isLoading && (
                <div className="max-w-4xl bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 mb-8 border border-gray-200 shadow-2xl animate-fadeIn mx-auto">
                  
                  {/* Tracking Progress Bar */}
                  <div className="mb-8">
                    <div className="relative">
                      {/* Progress Line */}
                      <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300">
                        {/* Active Progress Line */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                          style={{ 
                            width: `${(getTrackingStages(trackingResult.status).filter(s => s.isCompleted).length / 3) * 100}%` 
                          }}
                        ></div>
                      </div>

                      {/* Stages */}
                      <div className="relative flex justify-between">
                        {getTrackingStages(trackingResult.status).map((stage, index) => (
                          <div key={stage.id} className="flex flex-col items-center" style={{ width: '25%' }}>
                            {/* Stage Circle */}
                            <div className={`
                              relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4
                              transition-all duration-300
                              ${stage.isCompleted 
                                ? 'bg-green-500 text-white' 
                                : stage.isCurrent 
                                  ? 'bg-green-500 text-white animate-pulse' 
                                  : 'bg-gray-300 text-gray-500'
                              }
                            `}>
                              {stage.icon}
                            </div>
                            
                            {/* Stage Label */}
                            <div className={`
                              text-center font-semibold text-sm md:text-base
                              ${stage.isCompleted || stage.isCurrent ? 'text-gray-900' : 'text-gray-400'}
                            `}>
                              {stage.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                    
                    {/* Origin */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Origin</div>
                        <div className="text-base font-semibold text-gray-900">{trackingResult.origin_state}</div>
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Destination</div>
                        <div className="text-base font-semibold text-gray-900">{trackingResult.destination_state}</div>
                      </div>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Est. Delivery</div>
                        <div className="text-base font-semibold text-gray-900">
                          {trackingResult.estimated_days ? `${trackingResult.estimated_days} days` : 'Calculating...'}
                        </div>
                        {trackingResult.scheduled_delivery && (
                          <div className="text-xs text-gray-500 mt-1">
                            {new Date(trackingResult.scheduled_delivery).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Tracking Number */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Tracking Number</div>
                        <div className="text-base font-mono font-semibold text-gray-900">{trackingResult.tracking_number}</div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${trackingResult.status === 'delivered' 
                          ? 'bg-green-100 text-green-700' 
                          : trackingResult.status === 'delayed' 
                            ? 'bg-red-100 text-red-700'
                            : trackingResult.status === 'cancelled'
                              ? 'bg-gray-100 text-gray-700'
                              : 'bg-blue-100 text-blue-700'
                        }
                      `}>
                        {trackingResult.status === 'Pick-up-complete' ? 'Picked Up' 
                          : trackingResult.status === 'in_transit' ? 'In Transit'
                          : trackingResult.status === 'delivered' ? 'Delivered'
                          : trackingResult.status === 'delayed' ? 'Delayed'
                          : trackingResult.status === 'cancelled' ? 'Cancelled'
                          : 'Pending'}
                      </div>
                    </div>
                  </div>

                  {/* Delay Alert */}
                  {trackingResult.status === 'delayed' && trackingResult.delay_reason && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-red-900 mb-1">Delay Alert</div>
                          <div className="text-sm text-red-700">{trackingResult.delay_reason}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivered Alert */}
                  {trackingResult.status === 'delivered' && trackingResult.actual_delivery && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-green-900 mb-1">Package Delivered</div>
                          <div className="text-sm text-green-700">
                            Delivered on {new Date(trackingResult.actual_delivery).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Add CSS animation
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}