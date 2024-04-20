const CodeSkeleton = () => {
    const lines = 3; 
  
    return (
      <div className="animate-pulse">
        {Array.from({ length: lines }, (_, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="h-6 bg-gray-200 rounded-md"></div>
            <div className="w-5/6 h-6 bg-gray-200 rounded-md"></div>
            <div className="w-2/3 h-6 bg-gray-200 rounded-md"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CodeSkeleton;
  