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
        termsText: "By signing in, you agree to our",
        termsLink: "Terms of Service",
        andText: "and",
        privacyLink: "Privacy Policy",
        testimonial: "Chat2Geo has transformed how we analyze geospatial data, making complex analyses accessible to our entire team.",
        forgotPassword: "Forgot password?",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        orContinueWith: "OR CONTINUE WITH",
    },
    signup: {
        title: "Create an account",
        subtitle: "Enter your information below to create your account",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        passwordRequirements: "Password must be at least 8 characters and include a combination of uppercase, lowercase, numbers, and special characters.",
        signUpButton: "Sign up",
        errorLabel: "Error:",
        passwordMismatch: "Passwords do not match",
        alreadyHaveAccount: "Already have an account?",
        signIn: "Sign in",
        termsText: "By signing up, you agree to our",
        termsLink: "Terms of Service",
        andText: "and",
        privacyLink: "Privacy Policy",
        tagline: "Geospatial insights at scale, just a prompt away",
        passwordStrengthError: "Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters.",
        networkError: "Network error. Please try again.",
        emailExists: "This email is already registered. Please log in or use a different email."
    },
    verify: {
        signUpSuccessful: "Sign Up Successful",
        confirmationSent: "Thank you for signing up! We've sent a confirmation link to",
        nextSteps: "Next steps",
        checkInbox: "Check your email inbox (and spam folder) for the verification link (it may take a few minutes to arrive)",
        completeVerification: "Complete the verification process",
        returnToLogin: "Return to the login page to sign in",
        goToLogin: "Go to Login",
        continueAgree: "By continuing, you agree to our",
        termsOfService: "Terms of Service",
        and: "and",
        privacyPolicy: "Privacy Policy",
        testimonial: "Unlock the power of geospatial data with our advanced analytics platform."
    },
    auth: {
        continueWithGoogle: "Continue with Google",
        continueWithGithub: "Continue with Github"
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
    },
    legal: {
        privacyPolicy: {
            title: "Privacy Policy",
            effectiveDate: "Effective Date: {date}",
            lastUpdated: "Last Updated: {date}",
            sections: {
                intro: "Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use the Chat2Geo platform (\"the Service\").",
                infoCollect: {
                    title: "1. Information We Collect",
                    personal: {
                        title: "1.1 Personal Information",
                        content: "We may collect personal information such as your name, email address, and any additional information you provide when you create an account or use the Service.\\n\\nNote: We do not record or collect IP addresses."
                    },
                    uploaded: {
                        title: "1.2 Uploaded Content",
                        content: "We store the content you upload to the Service (e.g., text data, vector files, or documents) to provide you with geospatial analyses and related features. This includes data processed in your chats and any documents you integrate with the Service."
                    },
                    interaction: {
                        title: "1.3 Interaction Data",
                        content: "We may collect basic information about how you navigate or interact with the Service (e.g., feature usage, timestamps of actions) solely for improving user experience and maintaining platform stability. We do not collect IP addresses or other network identifiers."
                    }
                },
                usage: {
                    title: "2. How We Use Your Information",
                    service: {
                        title: "2.1 Providing the Service",
                        content: "We use your information exclusively to operate and maintain the Service, including running analyses, generating reports, and displaying results for your use. We do not share or sell your data to any third party for their own use."
                    },
                    improvement: {
                        title: "2.2 Improvement and Development",
                        content: "We may use aggregated or anonymized information about overall feature usage for research and development to enhance and refine our services. This data will not identify you or your specific User Data."
                    },
                    communication: {
                        title: "2.3 Communication",
                        content: "We may use your contact information to send you administrative or technical notices, updates, and other information directly relevant to your use of the Service."
                    }
                },
                sharing: {
                    title: "3. Sharing and Disclosure",
                    providers: {
                        title: "3.1 Limited Disclosure to Service Providers",
                        content: "We may share minimal information with trusted service providers who help us operate and improve the Service. Such providers are bound by confidentiality and are prohibited from using the information for any purpose other than providing services to us."
                    },
                    legal: {
                        title: "3.2 Legal Requirements",
                        content: "We may disclose your information if required by law or in response to valid legal processes, such as a subpoena or court order."
                    },
                    business: {
                        title: "3.3 Business Transfers",
                        content: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you if any such transfer occurs."
                    }
                },
                retention: {
                    title: "4. Data Retention and Deletion",
                    storage: {
                        title: "4.1 Storage Period",
                        content: "We retain your data as long as you have an active account or as needed to provide you with the Service. For beta testers, data and history may be removed upon completion of the beta period, as stated in our Terms of Service."
                    },
                    deletion: {
                        title: "4.2 Deletion Requests",
                        content: "You can delete your data at any time by following the instructions within the Service or by contacting us directly. Once deleted, your data may not be recoverable."
                    }
                },
                security: {
                    title: "5. Security Measures",
                    content: "We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security."
                },
                children: {
                    title: "6. Children\'s Privacy",
                    content: "Because this Service provides specialized geospatial analysis tools intended for professional or academic use, it is not marketed toward or intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe we may have inadvertently collected information from a minor, please contact us immediately."
                },
                changes: {
                    title: "7. Changes to This Privacy Policy",
                    content: "We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify you by updating the \"Effective Date\" at the top of this page. Your continued use of the Service after any changes indicate your acceptance of the new Privacy Policy."
                }
            }
        },
        termsOfService: {
            title: "Terms of Service",
            effectiveDate: "Effective Date: {date}",
            lastUpdated: "Last Updated: {date}",
            sections: {
                intro: "Welcome to the Chat2Geo platform (\"the Service\"). By accessing or using the Service, you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree with any part of these Terms, you must not use the Service.",
                beta: {
                    title: "1. Beta Testing Program",
                    limitedAccess: {
                        title: "1.1 Limited Access",
                        content: "Access to the beta version of the Service is granted by selection only. Each license is personal to the individual user and is non-transferable."
                    },
                    features: {
                        title: "1.2 Beta Features",
                        content: "Because this is a beta version, certain features may be in development or subject to change without notice. The Service may not operate as intended, and you may encounter bugs, errors, or other issues."
                    },
                    feedback: {
                        title: "1.3 Feedback",
                        content: "We welcome feedback about your experience with the Service. You grant us a non-exclusive, perpetual, irrevocable, royalty-free license to use, modify, and incorporate any feedback you provide into our products or services."
                    }
                },
                accounts: {
                    title: "2. User Accounts",
                    creation: {
                        title: "2.1 Account Creation",
                        content: "To use certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and complete."
                    },
                    security: {
                        title: "2.2 Account Security",
                        content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security."
                    }
                },
                userData: {
                    title: "3. User Content and Data",
                    storage: {
                        title: "3.1 Data Storage",
                        content: "Your chats, analyses, and documents uploaded to the Service (\"User Data\") are stored in our systems so that you can review or reload them at a later time."
                    },
                    ownership: {
                        title: "3.2 Ownership of User Data",
                        content: "You retain all ownership rights to content you upload. By uploading content to the Service, you grant us a limited, non-exclusive right to store, reproduce, and process your content solely for the purpose of providing the Service to you."
                    },
                    exclusiveUse: {
                        title: "3.3 Exclusive Use",
                        content: "Your session history and any documents you upload are only used for your own purposes, namely to facilitate and enhance the geospatial analyses you conduct. We do not share or use your content for any other purpose."
                    }
                },
                license: {
                    title: "4. License and Usage",
                    grant: {
                        title: "4.1 License Grant",
                        content: "Subject to these Terms, we grant you a limited, non-transferable, non-exclusive, revocable license to use the Service for lawful purposes."
                    },
                    prohibited: {
                        title: "4.2 Prohibited Conduct",
                        content: "You agree not to use the Service to:",
                        item1: "Violate any local, state, national, or international law or regulation.",
                        item2: "Infringe or misappropriate the intellectual property rights of any third party.",
                        item3: "Upload harmful or disruptive materials, such as malware or viruses.",
                        item4: "Perform analyses or operations you are not authorized to execute."
                    }
                },
                intellectualProperty: {
                    title: "5. Intellectual Property",
                    content: "All intellectual property rights in the Service, including any trademarks, logos, designs, or underlying technology, are owned or licensed by us. Nothing in these Terms grants you any right, title, or interest in our intellectual property except as expressly set forth herein."
                },
                disclaimers: {
                    title: "6. Disclaimers",
                    beta: {
                        title: "6.1 Beta Disclaimer",
                        content: "The Service is provided on an \"as is\" and \"as available\" basis. As this is a beta version, no warranties or guarantees of performance, reliability, or availability are provided."
                    },
                    warranty: {
                        title: "6.2 No Warranty",
                        content: "We disclaim any and all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement."
                    }
                },
                liability: {
                    title: "7. Limitation of Liability",
                    content: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with the use or inability to use the Service, even if we have been advised of the possibility of such damages."
                },
                termination: {
                    title: "8. Termination and Data Removal",
                    terminationPolicy: {
                        title: "8.1 Termination",
                        content: "We may terminate or suspend access to the Service at any time without prior notice or liability for any reason. You may also discontinue use of the Service at any time."
                    },
                    dataRemoval: {
                        title: "8.2 Data Removal",
                        content: "Upon the end of your beta testing, all of your data and history will be permanently removed if not already deleted by you, and this removal is irreversible."
                    }
                },
                governing: {
                    title: "9. Governing Law and Dispute Resolution",
                    content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be resolved exclusively in the courts within that jurisdiction."
                },
                changes: {
                    title: "10. Changes to the Terms",
                    content: "We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the \"Effective Date\" at the top of this page. Your continued use of the Service after such changes constitute acceptance of the modified Terms."
                }
            }
        }
    },
    changelog: {
        title: "Chat2Geo Updated (Version {version}) - {date}",
        useContent: "true",
        content: `
#### New Features
- Added a capability to load any dataset on Google Earth Engine (GEE).
- Add new database query function to find GEE datasets based on user\\'s search query (given by the LLM).
- Added a web scraper function to retrieve information on the dataset selected for the user.

#### Improvements
- Updated the Vercel AI SDK to have better streaming experience.
- Cleaned up the codebase to improve clarity.

#### Bug Fixes
- Fixed some minor bugs.
`
    }
} as const