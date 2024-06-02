import React from 'react';

const CarList = () => {
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="renault-megane.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">400 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Renault Mégane</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="dacia-logan.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">300 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Dacia Logan</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="audi.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">350 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Audi M6</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="audi.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">350 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Audi</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="renault-megane.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">400 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Renault Mégane</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>


            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src="dacia-logan.jpg"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">300 dh/jour</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Dacia Logan</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 6 A2 2 0 0 1 5 8 A2 2 0 0 1 3 6 A2 2 0 0 1 7 6 z" />
                                <path d="M14 6 A2 2 0 0 1 12 8 A2 2 0 0 1 10 6 A2 2 0 0 1 14 6 z" />
                                <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
                                <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
                                <path d="M14 18 A2 2 0 0 1 12 20 A2 2 0 0 1 10 18 A2 2 0 0 1 14 18 z" />
                                <path d="M5 8v8M12 8v8M19 8v2a2 2 0 01-2 2H5" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Boite de vitesse</p>

                                <p className="font-medium">Manuelle</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 002.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 01-1 1 1 1 0 01-1-1V14a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0018 21a2.5 2.5 0 002.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6v1.5m0-3.5H6V5h6v5m6 0a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Diesel</p>

                                
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="size-4 text-indigo-700"
                            >
                                <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Siège</p>

                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CarList;
