import React, { useState, useEffect, useCallback } from 'react';

// --- MOCK S3 SDK ---
// IMPORTANT: Replace these mock functions with your actual AWS S3 SDK calls.
// You'll need to install and configure the AWS SDK for JavaScript v3.
// Example: import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const MOCK_S3_BUCKET = {
    'contactUs.json': {"section":{"label":"Contact","heading":"Hello, thanks for your interest!","subheading":"Send us a Message"},"form":{"fields":[{"name":"firstName","type":"text","placeholder":"First Name","required":true},{"name":"lastName","type":"text","placeholder":"Last Name","required":true},{"name":"email","type":"email","placeholder":"Business Email","required":true}],"submitButton":{"text":"Send Message"}},"contactInfo":[{"type":"email","label":"Email Us","value":"hello@example.com"}]},
    'footer.json': {"ctaSection":{"heading":"Unlock faster growth.","buttonText":"Connect Now"},"navigation":["Services","Solutions","About","Contact"],"socialLinks":[{"platform":"linkedin","url":"#"}]},
    'header.json': {"logo":{"text":"zimetrics"},"navigation":{"items":[{"id":"services","name":"Services"},{"id":"solutions","name":"Solutions"},{"id":"about","name":"About"}]},"cta":{"text":"Contact Us"}},
    'heroCarousel.json': {"slides":[{"id":1,"title":"AI Enhanced Efficiency","description":"Reshaping Industries with AI.","ctaText":"READ MORE"}],"settings":{"autoplayInterval":5000}},
};

const s3Client = { // This is a mock client. Replace with your actual S3Client instance.
    // s3Client = new S3Client({ region: "your-region", credentials: {...} });
};
const BUCKET_NAME = 'your-s3-bucket-name'; // IMPORTANT: Set your bucket name here

/**
 * MOCK: Fetches a list of JSON files from the S3 bucket.
 * @returns {Promise<Array<{key: string}>>} A list of file keys.
 */
const fetchJsonFilesFromS3 = async () => {
    console.log("MOCK S3: Listing objects...");
    // --- REPLACE WITH ACTUAL S3 LOGIC ---
    // const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME, Prefix: '.json' });
    // const { Contents } = await s3Client.send(command);
    // return Contents.map(c => ({ key: c.Key }));
    // ------------------------------------
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return Object.keys(MOCK_S3_BUCKET).map(key => ({ key }));
};

/**
 * MOCK: Fetches the content of a specific JSON file.
 * @param {string} fileKey - The key (name) of the file in the S3 bucket.
 * @returns {Promise<object>} The parsed JSON content.
 */
const fetchJsonContentFromS3 = async (fileKey) => {
    console.log(`MOCK S3: Getting object: ${fileKey}`);
    // --- REPLACE WITH ACTUAL S3 LOGIC ---
    // const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: fileKey });
    // const response = await s3Client.send(command);
    // const str = await response.Body.transformToString();
    // return JSON.parse(str);
    // ------------------------------------
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    if (MOCK_S3_BUCKET[fileKey]) {
        return JSON.parse(JSON.stringify(MOCK_S3_BUCKET[fileKey])); // Return a deep copy
    }
    throw new Error("File not found in mock S3.");
};

/**
 * MOCK: Saves (overwrites) a JSON file in the S3 bucket.
 * @param {string} fileKey - The key (name) of the file to save.
 * @param {object} jsonData - The JSON data to save.
 * @returns {Promise<void>}
 */
const saveJsonToS3 = async (fileKey, jsonData) => {
    console.log(`MOCK S3: Putting object: ${fileKey}`);
    // --- REPLACE WITH ACTUAL S3 LOGIC ---
    // const command = new PutObjectCommand({
    //     Bucket: BUCKET_NAME,
    //     Key: fileKey,
    //     Body: JSON.stringify(jsonData, null, 2),
    //     ContentType: 'application/json'
    // });
    // await s3Client.send(command);
    // ------------------------------------
    await new Promise(resolve => setTimeout(resolve, 700)); // Simulate network delay
    MOCK_S3_BUCKET[fileKey] = jsonData;
    console.log("MOCK S3: Save successful.");
};
// --- END MOCK S3 SDK ---


// --- UTILITY FUNCTIONS ---

/**
 * A simple deep cloning utility to prevent direct state mutation.
 * @param {any} obj - The object or value to clone.
 * @returns {any} A deep copy of the input.
 */
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Sets a value in a nested object based on a path string.
 * @param {object} obj - The object to update.
 * @param {string} path - The path to the value (e.g., 'a.b[0].c').
 * @param {any} value - The new value to set.
 */
const setByPath = (obj, path, value) => {
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
};


// --- UI COMPONENTS ---

const IconHome = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);

const IconSave = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
);

const IconUndo = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
);

const IconTrash = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
);

const Spinner = ({ size = 'w-6 h-6' }) => (
    <div className={`loader animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-indigo-600 ${size}`} />
);

// --- RECURSIVE FORM FIELD COMPONENT ---

const JsonField = ({ data, parentKey, onDataChange }) => {
    const renderField = (value, key, currentPath) => {
        const handleValueChange = (newValue) => {
            onDataChange(currentPath, newValue);
        };

        const commonInputClass = "block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all";

        if (typeof value === 'object' && value !== null) {
            return (
                <div>
                    <label className="block text-sm font-medium text-gray-700 capitalize mb-2">{key}</label>
                    {Array.isArray(value) 
                        ? <ArrayEditor arrayData={value} path={currentPath} onDataChange={onDataChange} />
                        : <ObjectEditor objectData={value} path={currentPath} onDataChange={onDataChange} />}
                </div>
            );
        }

        let inputElement;
        if (typeof value === 'boolean') {
            inputElement = (
                <div className="flex items-center h-full">
                     <input type="checkbox" checked={value} onChange={(e) => handleValueChange(e.target.checked)} className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2" />
                </div>
            );
        } else if (typeof value === 'string' && value.length > 100) {
            inputElement = <textarea value={value} onChange={(e) => handleValueChange(e.target.value)} rows="4" className={commonInputClass} />;
        } else {
            inputElement = <input type={typeof value === 'number' ? 'number' : 'text'} value={value} onChange={(e) => handleValueChange(typeof value === 'number' ? parseFloat(e.target.value) || 0 : e.target.value)} className={commonInputClass} />;
        }
        
        return (
             <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 items-center">
                <label className="md:col-span-3 block text-sm font-medium text-gray-700 capitalize">{key}</label>
                <div className="md:col-span-9">{inputElement}</div>
            </div>
        );
    };

    return (
        <>
            {Object.entries(data).map(([key, value]) => {
                const currentPath = parentKey ? `${parentKey}.${key}` : key;
                return (
                    <div key={currentPath} className="p-4 border border-gray-200 rounded-lg bg-white">
                       {renderField(value, key, currentPath)}
                    </div>
                );
            })}
        </>
    );
};

const ObjectEditor = ({ objectData, path, onDataChange }) => (
    <div className="ml-4 pl-4 border-l-2 border-indigo-200 space-y-4">
        <JsonField data={objectData} parentKey={path} onDataChange={onDataChange} />
    </div>
);

const ArrayEditor = ({ arrayData, path, onDataChange }) => {
    const handleAddItem = () => {
        const newItem = arrayData.length > 0 && typeof arrayData[0] === 'object' && !Array.isArray(arrayData[0]) && arrayData[0] !== null
            ? deepClone(arrayData[0])
            : '';
        const newArray = [...arrayData, newItem];
        onDataChange(path, newArray);
    };

    const handleRemoveItem = (index) => {
        const newArray = arrayData.filter((_, i) => i !== index);
        onDataChange(path, newArray);
    };

    return (
        <div>
            <div className="space-y-4">
                {arrayData.map((item, index) => {
                    const itemPath = `${path}[${index}]`;
                    return (
                        <div key={itemPath} className="relative p-5 border border-gray-300 rounded-lg bg-gray-50/70">
                            <button onClick={() => handleRemoveItem(index)} className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition-colors" title="Remove Item">
                                <IconTrash />
                            </button>
                            <JsonField data={typeof item === 'object' && item !== null ? item : { value: item }} parentKey={itemPath} onDataChange={onDataChange} />
                        </div>
                    );
                })}
            </div>
            <button onClick={handleAddItem} className="mt-4 px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 transition shadow-sm">
                Add Item
            </button>
        </div>
    );
};


// --- MAIN APP VIEWS ---

const Homepage = ({ onGetStarted }) => (
    <div className="flex items-center justify-center h-screen animate-fadeIn bg-gray-50">
        <div className="text-center p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">React S3 JSON Editor</h1>
            <p className="text-lg text-gray-600 mb-8">Visually edit JSON files fetched from your S3 bucket. Click save to commit changes directly back to S3.</p>
            <div className="bg-white p-8 rounded-xl shadow-lg text-left space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">How It Works</h3>
                <ul className="space-y-2 list-decimal list-inside text-gray-700">
                    <li><span className="font-semibold">Fetch:</span> Files are listed directly from your S3 bucket.</li>
                    <li><span className="font-semibold">Edit:</span> Select a file to edit its content in an easy-to-use form.</li>
                    <li><span className="font-semibold">Save:</span> Commit your changes, which overwrites the file in S3.</li>
                    <li><span className="font-semibold">Undo:</span> Revert all changes made since the last save.</li>
                </ul>
            </div>
            <button onClick={onGetStarted} className="mt-10 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Started
            </button>
        </div>
    </div>
);

export const EditorView = ({ onShowHomepage }) => {
    const [files, setFiles] = useState([]);
    const [activeFileKey, setActiveFileKey] = useState(null);
    const [originalJson, setOriginalJson] = useState(null);
    const [editedJson, setEditedJson] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [saveMessage, setSaveMessage] = useState('');

    useEffect(() => {
        const loadFiles = async () => {
            setIsLoading(true);
            setError('');
            try {
                const s3Files = await fetchJsonFilesFromS3();
                setFiles(s3Files);
            } catch (err) {
                console.error("Failed to fetch file list:", err);
                setError('Failed to load files from S3 bucket.');
            } finally {
                setIsLoading(false);
            }
        };
        loadFiles();
    }, []);

    const handleSelectFile = async (key) => {
        if (key === activeFileKey) return;
        setIsLoading(true);
        setError('');
        setSaveMessage('');
        setActiveFileKey(key);
        try {
            const content = await fetchJsonContentFromS3(key);
            setOriginalJson(deepClone(content));
            setEditedJson(deepClone(content));
        } catch (err) {
            console.error(`Failed to fetch content for ${key}:`, err);
            setError(`Failed to load content for ${key}.`);
            setOriginalJson(null);
            setEditedJson(null);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleDataChange = useCallback((path, value) => {
        setEditedJson(currentJson => {
            const newJson = deepClone(currentJson);
            setByPath(newJson, path, value);
            return newJson;
        });
    }, []);

    const handleUndo = () => {
        setEditedJson(deepClone(originalJson));
        setSaveMessage('Changes have been reverted.');
        setTimeout(() => setSaveMessage(''), 3000);
    };

    const handleSave = async () => {
        if (!activeFileKey) return;
        setIsSaving(true);
        setError('');
        setSaveMessage('');
        try {
            await saveJsonToS3(activeFileKey, editedJson);
            setOriginalJson(deepClone(editedJson)); // Update original state after save
            setSaveMessage('File saved successfully!');
        } catch (err) {
            console.error(`Failed to save ${activeFileKey}:`, err);
            setError(`Failed to save file. See console for details.`);
        } finally {
            setIsSaving(false);
            setTimeout(() => setSaveMessage(''), 3000);
        }
    };
    
    const hasChanges = JSON.stringify(originalJson) !== JSON.stringify(editedJson);

    return (
        <div className="flex h-screen bg-gray-100 text-gray-800 font-sans">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">S3 JSON Editor</h1>
                        <p className="text-sm text-gray-500">Select a file to edit</p>
                    </div>
                    <button onClick={onShowHomepage} title="Go to Homepage" className="text-gray-500 hover:text-indigo-600">
                        <IconHome />
                    </button>
                </div>
                <nav className="flex-grow p-4 overflow-y-auto">
                    {files.length > 0 ? (
                        <ul className="space-y-1">
                            {files.map(({ key }) => (
                                <li key={key}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleSelectFile(key); }}
                                       className={`block px-4 py-2.5 text-sm rounded-md transition-colors ${activeFileKey === key ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
                                        {key}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : isLoading ? <div className="flex justify-center pt-8"><Spinner /></div> : <p className="text-center text-gray-500 text-sm mt-4">No JSON files found.</p>}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {activeFileKey ? (
                    <div className="bg-white p-8 rounded-xl shadow-lg animate-fadeIn max-w-5xl mx-auto">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">{activeFileKey}</h2>
                            <div className="flex items-center space-x-3">
                                {saveMessage && <span className="text-sm text-green-600">{saveMessage}</span>}
                                {error && <span className="text-sm text-red-600">{error}</span>}
                                <button onClick={handleUndo} disabled={!hasChanges || isSaving} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors shadow-sm flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium">
                                    <IconUndo /> Undo
                                </button>
                                <button onClick={handleSave} disabled={!hasChanges || isSaving} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium">
                                    {isSaving ? <Spinner size="w-5 h-5 mr-2" /> : <IconSave />}
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </div>
                        {isLoading ? <div className="flex justify-center py-16"><Spinner size="w-12 h-12" /></div> : (
                            <div className="space-y-4">
                                {editedJson && <JsonField data={editedJson} parentKey="" onDataChange={handleDataChange} />}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center text-gray-500">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No file selected</h3>
                            <p className="mt-1 text-sm text-gray-500">Select a file from the sidebar to begin editing.</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};