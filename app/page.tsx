import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Section 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Section 1</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 1</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 1 in section 1 goes here.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 2</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 2 in section 1 goes here.
            </p>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 3</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 3 in section 1 goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Section 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 1</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 1 in section 2 goes here.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 2</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 2 in section 2 goes here.
            </p>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 3</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 3 in section 2 goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Section 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 1</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 1 in section 3 goes here.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 2</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 2 in section 3 goes here.
            </p>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Box 3</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Content for box 3 in section 3 goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
