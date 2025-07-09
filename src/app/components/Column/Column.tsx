type ColumnProps = {
    title: string;
};

export function Column({ title }: ColumnProps) {
    return (
        <div className="flex flex-col bg-gray-800 p-4 rounded-2xl shadow-md w-80 max-h-[95vh] pr-1 mr-8">
            <h2 className="text-xl font-bold text-white mb-4 text-center">{title}</h2>
            <div className="overflow-auto scrollbar">

                <div className="flex-1 space-y-4 pr-1 mt-2 mr-2">
                    <div
                        className="bg-gray-700 text-gray-200 p-4 pr-2 rounded-lg shadow-sm hover:bg-gray-600 transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">Task title</h3>
                        <p className="text-sm text-gray-300 overflow-auto max-h-24 scrollbar pr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos dicta nam ratione animi possimus reiciendis. Sapiente nesciunt eligendi eum, laborum enim hic eveniet expedita error corporis sed dolore commodi.</p>
                    </div>
                </div>

                <div className="flex-1 space-y-4 pr-1 mt-2 mr-2">
                    <div
                        className="bg-gray-700 text-gray-200 p-4 pr-2 rounded-lg shadow-sm hover:bg-gray-600 transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">Task title</h3>
                        <p className="text-sm text-gray-300 overflow-auto max-h-24 scrollbar pr-1">Lorem iimi possimus reiciendis. Sapiente nesciunt eligendi eum, laborum enim hic eveniet expedita error corporis sed dolore commodi.</p>
                    </div>
                </div>

                <div className="flex-1 space-y-4 pr-1 mt-2 mr-2">
                    <div
                        className="bg-gray-700 text-gray-200 p-4 pr-2 rounded-lg shadow-sm hover:bg-gray-600 transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">Task title</h3>
                        <p className="text-sm text-gray-300 overflow-auto max-h-24 scrollbar pr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos dicta nam ratione animi possimus reiciendis. Sapiente nesciunt eligendi eum, laborum enim hic eveniet expedita error corporis sed dolore commodi.</p>
                    </div>
                </div>

                <div className="flex-1 space-y-4 pr-1 mt-2 mr-2">
                    <div
                        className="bg-gray-700 text-gray-200 p-4 pr-2 rounded-lg shadow-sm hover:bg-gray-600 transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">Task title</h3>
                        <p className="text-sm text-gray-300 overflow-auto max-h-24 scrollbar pr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos dicta nam ratione animi possimus reiciendis. Sapiente nesciunt eligendi eum, laborum enim hic eveniet expedita error corporis sed dolore commodi.</p>
                    </div>
                </div>

            </div>
            <button
                className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition">
                + Add Task
            </button>
        </div>
    )
}

export default Column;