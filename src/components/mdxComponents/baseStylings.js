
export const BaseStylings = {
  Para: ({ children }) => <p className="text-gray-700 my-2 text-base">{children}</p>,
  LinkInLine: ({ children }) => <a className="text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100">{ children }</a>,
  Pre: ({ children }) => <pre className="my-2 py-2 px-3 w-full rounded-md text-sm overflow-auto"> { children }</pre>,
  BlockQuote: ({ children }) => <blockquote className="rounded-lg border w-5/6 my-2 px-10 py-3 border-gray-300 bg-gray-100 text-justify self-center">{ children }</blockquote>
};

