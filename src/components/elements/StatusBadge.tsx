export const StatusBadge = () => {
    return (
      <div className="bg-gray-950 border border-gray-800 inline-flex items-center rounded-3xl px-4 py-1.5 gap-4">
        <div className="bg-emerald-500 size-2.5 rounded-full relative">
          <div className="bg-emerald-500/50 inset-0 rounded-full absolute animate-pingLarge"></div>
        </div>
        <div className="text-sm font-medium">Available for opportunities</div>
      </div>
    );
  };
  