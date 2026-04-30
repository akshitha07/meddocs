import { useParams } from 'react-router-dom';

export const JournalPage = () => {
  const { journalId } = useParams();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">
          Journal Details
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          View detailed information about this journal.
        </p>
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-500">
            Journal page for ID: {journalId} - Content will be added here.
          </p>
        </div>
      </div>
    </div>
  );
};
