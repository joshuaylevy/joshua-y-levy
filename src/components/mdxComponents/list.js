export const List = {
  Unordered: ({ children }) => (
    <ul className="text-gray-700 my-2 text-base list-disc list-outside ml-6 space-y-1">
      {children}
    </ul>
  ),
  Ordered: ({ children }) => (
    <ol className="text-gray-700 my-2 text-base list-decimal list-outside ml-6 space-y-1">
      {children}
    </ol>
  ),
  Item: ({ children }) => (
    <li className="text-gray-700 pl-2">{children}</li>
  ),
};

