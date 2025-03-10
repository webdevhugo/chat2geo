export default {
    login: {
        title: "Sign in to your account",
        subtitle: "Enter your credentials below",
        email: "Email",
        emailPlaceholder: "name@company.com",
        password: "Password",
        passwordPlaceholder: "••••••••",
        errorLabel: "Error:",
        signInButton: "Sign in",
        termsText: "By clicking continue, you agree to our",
        termsLink: "Terms of Service",
        andText: "and",
        privacyLink: "Privacy Policy",
        testimonial: "Let powerful AI solutions help you better address various environmental challenges."
    },
    settings: {
        title: "Settings",
        appearance: {
            title: "Appearance",
            description: "Customize how the application looks",
            theme: "Theme",
            language: "Language"
        },
        version: "Version",
        tooltips: {
            settings: "Open settings"
        },
        theme: {
            toggle: "Toggle theme",
            light: "Light",
            dark: "Dark",
            system: "System"
        }
    },
    userProfile: {
        title: "Your Profile",
        description: "View your account details and license information.",
        profile: "Profile",
        info: {
            role: "Role",
            organization: "Organization",
            licenseStart: "License Start",
            licenseEnd: "License End",
            requestsUsed: "Requests Used",
            knowledgeBaseDocs: "Knowledge Base Docs"
        },
        notAvailable: "Not Available",
        actions: {
            logout: "Logout",
            loggingOut: "Logging out..."
        }
    },
    sidebar: {
        newSession: "New Session",
        sessionHistory: "Session History",
        knowledgeBase: "Knowledge Base",
        integrations: "Integrations",
        feedback: "Feedback",
        collapse: "Collapse",
        tooltips: {
            newSession: "Start a new session",
            sessionHistory: "View session history",
            knowledgeBase: "Manage knowledge base documents",
            integrations: "Manage integrations",
            feedback: "Send feedback",
            toggleSidebar: "Toggle sidebar"
        }
    },
    chatInput: {
        placeholder: "Type a message...",
        dropzone: {
            title: "Drop files here...",
            supportedFormats: "Supported formats:",
            formats: {
                shapefile: ".shp (zipped shapefile)",
                geojson: ".geojson"
            }
        },
        buttons: {
            send: "Send message",
            attach: "Attach files",
            stop: "Stop streaming"
        },
        mapTools: {
            title: "Toolbox",
            tooltip: "View your toolbox",
            buttons: {
                selectRoi: {
                    title: "Select ROI on map",
                    description: "Select Region of Interest on Map"
                },
                openDatabase: {
                    title: "Database",
                    description: "Import data from database"
                }
            }
        },
        sessionAssets: {
            title: "Session Assets",
            tooltips: {
                noAssets: "No assets added",
                viewAssets: "View your session assets"
            },
            sections: {
                attachments: {
                    title: "Attachments",
                },
                roi: {
                    title: "ROI Layers",
                }
            },
        }
    },
    feedback: {
        title: "Feedback",
        placeholder: "Please let use know your requests or feedback, or any issues/bugs you came across while using the app.",
        submit: "Submit",
        sending: "Sending...",
        messages: {
            success: "Thanks for your feedback!",
            error: {
                default: "Error sending feedback.",
                tryAgain: "Something went wrong. Please try again!"
            }
        }
    },
    integrations: {
        title: "Integrations",
        description: "Connect your preferred services and data sources",
        addNew: "Add New Integration", // 虽然当前被注释，但保留以备后用
        actions: {
            connect: "Connect",
            configure: "Configure" // 虽然当前未使用，但可能后续需要
        },
        messages: {
            connectSuccess: "Successfully connected to Esri Feature Services",
        },
        status: {
            disconnect: "Disconnect"
        },
        page: {
            addNew: "Add new integration",
            configure: "Configuring service: {serviceId}"
        }
    },
    chatHistory: {
        title: "Session History",
        description: "Review and load past chat sessions",
        empty: "No chats found",
        deleteConfirm: {
            title: "Confirm Deletion",
            message: "Are you sure you want to delete all selected chats? This action cannot be undone.",
            cancelButton: "Cancel",
            confirmButton: "Delete"
        },
        messages: {
            deleteSuccess: "Selected chats deleted successfully",
            deleteError: "Something went wrong while deleting chats"
        },
        table: {
            title: "Title",
            createdAt: "Created At",
            deleteSelected: "Delete Selected",
            columns: {
                title: "Title",
                createdAt: "Created At"
            }
        }
    },
    capabilities: {
        greeting: "Hello, {name}!",
        overview: "Here's a quick overview of some of the capabilities of Chat2Geo:",
        platformCapabilities: {
            title: "Platform Capabilities:",
            realTime: "Real-time geospatial analysis",
            knowledgeBase: "Knowledge Base queries using your docs",
            reports: "Drafting summary reports"
        },
        geospatialAnalyses: {
            title: "Geospatial Analyses:",
            landUse: "Land-use/land-cover mapping",
            change: "Bi-Temporal Change detection",
            urban: "Urban heat island analysis",
            pollution: "Air pollution assessment"
        },
        geeData: {
            title: "Google Earth Engine (GEE) Data Loading (Experimental):",
            raster: "Load any raster dataset available on GEE",
            access: "Access to a wide range of GEE datasets with a single prompt!"
        },
        keyNotes: {
            title: "Key Notes:",
            role: "Role:",
            docsLimit: "You can store up to {maxDocs} documents for Knowledge Base queries.",
            futureYear: "No analyses are available for {year} yet.",
            areaLimit: "Maximum area per request is {maxArea} sq km.",
            startYear: "Analyses start from {year}."
        }
    },
    knowledgeBase: {
        title: "All Documents",
        description: "Here you can add documents that you want your AI Assistants to access across the app.",
        search: "Search",
        addDocument: "Add Document",
        loading: "Loading...",
        confirmDelete: {
            title: "Confirm Deletion",
            message: "Are you sure you want to delete this document? This action cannot be undone.",
            confirmButton: "Delete"
        },
        folders: {
            allDocuments: "All Documents",
        },
        fileUpload: {
            title: "Add New Document",
            dragActive: "Drop the files here...",
            dragInactive: "Drop your files here or click to upload",
            supportedFormat: "Supported format: PDF",
            selectFiles: "Select Files",
            selectedFolder: "Selected folder:",
            allDocuments: "All Documents",
            buttons: {
                cancel: "Cancel",
                upload: "Upload",
                uploadMultiple: "Upload ({count} files)"
            }
        },
        modals: {
            deleteDocument: {
                title: "Confirm Deletion",
                message: "Are you sure you want to delete this document? This action cannot be undone.",
                confirmButton: "Delete"
            }
        },
        messages: {
            uploadSuccess: "Document uploaded successfully",
            uploadError: "Error processing files",
            deleteSuccess: "Document deleted successfully"
        },
        addGroup: {
            title: "Add New Group",
            placeholder: "Enter group name",
            buttons: {
                cancel: "Cancel",
                add: "Add Group"
            }
        },
        documentsTable: {
            columns: {
                name: "Name",
                owner: "Owner",
                pages: "Pages",
                lastEdited: "Last Edited"
            },
            actions: {
                update: "Update",
                delete: "Delete"
            },
            empty: "No documents found."
        },
        sidebar: {
            addGroup: "Add Group",
            actions: {
                update: "Update",
                delete: "Delete"
            }
        },
        editDocument: {
            title: "Edit Document Name",
            buttons: {
                cancel: "Cancel",
                save: "Save"
            }
        },
        maxDocsAlert: {
            title: "Maximum Documents Reached",
            description: "You have reached the maximum number of documents ({count}). Please delete some documents to upload more.",
            button: "Ok"
        }
    },
    artifacts: {
        title: "Insights Viewer",
        closeButton: "Close sidebar"
    },
    mapControls: {
        tooltips: {
            layersPanel: "Toggle layers panel",
            drawPoint: {
                active: "Click to cancel",
                inactive: "Select a location on the map"
            },
            drawPolygon: {
                active: "Click to cancel",
                inactive: "Draw a polygon on the map"
            },
            basemap: "Toggle basemap",
            attributeTable: "Attribute table",
            chartPanel: "Toggle chart panel"
        }
    },
    addressSearch: {
        tooltip: "Search Address",
        placeholder: "Enter an address",
        errors: {
            geocodeError: "Failed to geocode address.",
            fetchError: "An error occurred while fetching the geocode.",
            scriptError: {
                load: "Failed to load Google Maps script URL",
                api: "Google Maps JavaScript API not loaded."
            }
        }
    },
    common: {
        actions: {
            cancel: "Cancel",
            confirm: "Confirm"
        },
        input: {
            roiName: {
                placeholder: "Enter ROI name..."
            }
        }
    },
    map: {
        badge: {
            roiDrawingMode: "ROI Drawing Mode",
            queryLayer: "Query Layer"
        },
        roi: {
            toast: {
                created: 'ROI "{name}" created successfully.'
            },
            size: "Size: {value} km²"
        },
        roiControls: {
            finalizeRoi: "Finalize ROI",
            roiNameDialog: {
                title: "Enter ROI Name"
            },
            tooltips: {
                drawPolygon: {
                    active: "Click to cancel",
                    inactive: "Select a location on the map"
                },
                toggleBasemap: "Toggle basemap"
            }
        }
    },
    chat: {
        response: {
            tooltips: {
                openInsights: "Open Insights viewer"
            },
            errors: {
                usageLimit: {
                    maxRequests: "You have reached your maximum request limit.",
                    maxArea: "The selected area exceeds the maximum allowed size."
                }
            },
        }
    },
    mapLayers: {
        panel: {
            title: "Map Layers",
            actions: {
                delete: "Delete",
                pickColor: "Pick Color"
            },
        }
    }
} as const