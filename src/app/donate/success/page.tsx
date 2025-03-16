'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (sessionId) {
      // You can add additional verification here if needed
      setStatus('success');
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <FaCheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Thank You!</h2>
        <p className="mt-4 text-lg text-gray-600">
          Your donation has been successfully processed. We truly appreciate your generosity.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
} 