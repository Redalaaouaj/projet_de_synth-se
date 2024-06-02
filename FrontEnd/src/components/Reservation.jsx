import Header from "./Header";

export default function Reservation() {
    return (<>

        <Header />

        <div className="overflow-x-auto m-20">
            <table className="min-w-full divide-y-2 divide-blue-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Voiture</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Marque</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Coleur</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Prix</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Megan</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Renault</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Blanc</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">400 DH</td>
                        <td className="whitespace-nowrap px-4 py-2 flex justify-content">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="mr-2"
                            >
                                <path d="M320 256 A64 64 0 0 1 256 320 A64 64 0 0 1 192 256 A64 64 0 0 1 320 256 z" />
                                <path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                            </svg>
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                            </svg>

                        </td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Logan</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Dacia</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Noir</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">350 DH</td>
                        <td className="whitespace-nowrap px-4 py-2 flex justify-content">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="mr-2"
                            >
                                <path d="M320 256 A64 64 0 0 1 256 320 A64 64 0 0 1 192 256 A64 64 0 0 1 320 256 z" />
                                <path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                            </svg>
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                            </svg>

                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="inline-block rounded bg-yellow-500 px-4 py-2 mt-3 text-xs font-medium text-white hover:bg-yellow-400">Reserver</button>
        </div>
    </>
    );
}
