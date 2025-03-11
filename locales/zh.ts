export default {
    login: {
        title: "登录您的账户",
        subtitle: "请在下方输入您的账户",
        email: "邮箱",
        emailPlaceholder: "name@company.com",
        password: "密码",
        passwordPlaceholder: "••••••••",
        errorLabel: "错误：",
        signInButton: "登录",
        termsText: "登录即表示您同意我们的",
        termsLink: "服务条款",
        andText: "和",
        privacyLink: "隐私政策",
        testimonial: "Chat2Geo 改变了我们分析地理空间数据的方式，使复杂的分析对我们的整个团队都变得容易。",
        forgotPassword: "忘记密码？",
        noAccount: "还没有账户？",
        signUp: "注册",
        orContinueWith: "或使用",
    },
    signup: {
        title: "创建账户",
        subtitle: "请输入您的信息以创建账户",
        firstName: "名字",
        lastName: "姓氏",
        email: "邮箱",
        password: "密码",
        confirmPassword: "确认密码",
        passwordRequirements: "密码必须至少包含8个字符，并包含大写字母、小写字母、数字和特殊字符的组合。",
        signUpButton: "注册",
        errorLabel: "错误：",
        passwordMismatch: "两次输入的密码不匹配",
        alreadyHaveAccount: "已有账户？",
        signIn: "登录",
        termsText: "注册即表示您同意我们的",
        termsLink: "服务条款",
        andText: "和",
        privacyLink: "隐私政策",
        tagline: "地理空间洞察，只需一个提示",
        passwordStrengthError: "密码必须至少包含8个字符，并包含大写字母、小写字母、数字和特殊字符。",
        networkError: "网络错误，请重试。",
        emailExists: "此邮箱已被注册，请直接登录或使用其他邮箱"
    },
    verify: {
        signUpSuccessful: "注册成功",
        confirmationSent: "感谢您的注册！我们已发送确认链接至",
        nextSteps: "后续步骤",
        checkInbox: "检查您的邮箱收件箱（和垃圾邮件文件夹）以获取验证链接（可能需要几分钟才能收到）",
        completeVerification: "完成验证流程",
        returnToLogin: "返回登录页面进行登录",
        goToLogin: "前往登录",
        continueAgree: "登录即表示您同意我们的",
        termsOfService: "服务条款",
        and: "和",
        privacyPolicy: "隐私政策",
        testimonial: "通过我们的高级分析平台释放地理空间数据的力量。"
    },
    auth: {
        continueWithGoogle: "使用 Google 账号登录",
        continueWithGithub: "使用 Github 账号登录"
    },
    resetPassword: {
        title: '重置密码',
        description: '输入您的邮箱地址，我们将向您发送重置密码的链接',
        email: '邮箱',
        emailPlaceholder: 'name@example.com',
        sendLink: '发送重置链接',
        backToLogin: '返回登录',
        errorLabel: '错误：',
        testimonial: '地理空间分析，一触即发',
        termsText: '继续即表示您同意我们的',
        termsLink: '服务条款',
        andText: '和',
        privacyLink: '隐私政策',
        success: {
            title: '邮件已发送',
            description: '请查收密码重置邮件',
            emailSentMessage: '我们已向 {email} 发送了密码重置链接。\n请检查您的收件箱和垃圾邮件文件夹。',
            backToLogin: '返回登录',
            testimonial: '地理空间分析，一触即发',
            termsText: '继续即表示您同意我们的',
            termsLink: '服务条款',
            andText: '和',
            privacyLink: '隐私政策'
        },
        confirm: {
            title: '创建新密码',
            description: '为您的账户输入新密码',
            newPassword: '新密码',
            confirmPassword: '确认新密码',
            passwordRequirements: '密码必须至少8个字符，并包含大写字母、小写字母、数字和特殊字符的组合。',
            resetButton: '重置密码',
            errorLabel: '错误：',
            successTitle: '密码重置成功',
            successMessage: '您的密码已成功重置。现在可以使用新密码登录。',
            loginButton: '前往登录',
            testimonial: '地理空间分析，一触即发',
            termsText: '继续即表示您同意我们的',
            termsLink: '服务条款',
            andText: '和',
            privacyLink: '隐私政策',
            loading: "验证中，请稍候...",
            errors: {
                passwordMismatch: '两次输入的密码不一致',
                unknownError: '发生错误，请重试',
                linkExpired: "重置密码链接已失效，请重新申请",
                invalidLink: {
                    title: "重置链接无效",
                    message: "邮件链接已失效或已过期",
                    button: "重新发送重置链接"
                }
            }
        },
    },
    settings: {
        title: "设置",
        appearance: {
            title: "外观",
            description: "自定义应用程序的外观",
            theme: "主题",
            language: "语言"
        },
        version: "版本",
        tooltips: {
            settings: "打开设置"
        },
        theme: {
            toggle: "切换主题",
            light: "浅色",
            dark: "深色",
            system: "系统"
        }
    },
    userProfile: {
        title: "个人资料",
        description: "查看您的账户详情和许可证信息。",
        profile: "资料",
        info: {
            role: "角色",
            organization: "组织",
            licenseStart: "许可开始日期",
            licenseEnd: "许可结束日期",
            requestsUsed: "已使用请求数",
            knowledgeBaseDocs: "知识库文档"
        },
        notAvailable: "暂无数据",
        actions: {
            logout: "退出登录",
            loggingOut: "正在退出..."
        }
    },
    sidebar: {
        newSession: "新会话",
        sessionHistory: "会话历史",
        knowledgeBase: "知识库",
        integrations: "集成",
        feedback: "反馈",
        collapse: "收起",
        tooltips: {
            newSession: "开始新会话",
            sessionHistory: "查看会话历史",
            knowledgeBase: "管理知识库文档",
            integrations: "管理集成",
            feedback: "发送反馈",
            toggleSidebar: "切换侧边栏"
        }
    },
    chatInput: {
        placeholder: "输入消息...",
        dropzone: {
            title: "拖放文件到这里...",
            supportedFormats: "支持的格式：",
            formats: {
                shapefile: ".shp (压缩的shapefile)",
                geojson: ".geojson"
            }
        },
        buttons: {
            send: "发送消息",
            attach: "添加附件",
            stop: "停止生成"
        },
        mapTools: {
            title: "工具箱",
            tooltip: "查看工具箱",
            buttons: {
                selectRoi: {
                    title: "在地图上选择区域",
                    description: "在地图上选择感兴趣区域"
                },
                openDatabase: {
                    title: "数据库",
                    description: "从数据库导入数据"
                }
            }
        },
        sessionAssets: {
            title: "会话资源",
            tooltips: {
                noAssets: "未添加资源",
                viewAssets: "查看会话资源"
            },
            sections: {
                attachments: {
                    title: "附件",
                },
                roi: {
                    title: "ROI图层",
                }
            },
            close: "关闭会话资源面板"
        }
    },
    feedback: {
        title: "反馈",
        placeholder: "请告诉我们您的需求或反馈，或者在使用应用程序时遇到的任何问题/错误。",
        submit: "提交",
        sending: "发送中...",
        messages: {
            success: "感谢您的反馈！",
            error: {
                default: "发送反馈时出错。",
                tryAgain: "出现错误，请重试！"
            }
        }
    },
    integrations: {
        title: "集成",
        description: "连接您首选的服务和数据源",
        addNew: "添加新集成", // 虽然当前被注释，但保留以备后用
        actions: {
            connect: "连接",
            configure: "配置" // 虽然当前未使用，但可能后续需要
        },
        messages: {
            connectSuccess: "已成功连接到 Esri 要素服务。",
        },
        status: {
            disconnect: "断开连接"
        },
        page: {
            addNew: "添加新集成",
            configure: "配置服务：{serviceId}"
        }
    },
    chatHistory: {
        title: "会话历史",
        description: "查看和加载历史会话",
        empty: "暂无聊天记录",
        deleteConfirm: {
            title: "确认删除",
            message: "确定要删除所选的聊天记录吗？此操作无法撤消。",
            cancelButton: "取消",
            confirmButton: "删除"
        },
        messages: {
            deleteSuccess: "已成功删除所选聊天记录",
            deleteError: "删除聊天记录时出错"
        },
        table: {
            title: "标题",
            createdAt: "创建时间",
            deleteSelected: "删除所选",
            columns: {
                title: "标题",
                createdAt: "创建时间"
            }
        }
    },
    capabilities: {
        greeting: "你好，{name}！",
        overview: "以下是 Chat2Geo 的主要功能概览：",
        platformCapabilities: {
            title: "平台功能：",
            realTime: "实时地理空间分析",
            knowledgeBase: "基于文档的知识库查询",
            reports: "生成摘要报告"
        },
        geospatialAnalyses: {
            title: "地理空间分析：",
            landUse: "土地利用/土地覆盖制图",
            change: "双时相变化检测",
            urban: "城市热岛分析",
            pollution: "空气污染评估"
        },
        geeData: {
            title: "Google Earth Engine (GEE) 数据加载（实验性）：",
            raster: "加载 GEE 上的任何栅格数据集",
            access: "通过单个提示访问各种 GEE 数据集！"
        },
        keyNotes: {
            title: "重要说明：",
            role: "角色：",
            docsLimit: "知识库查询最多可存储 {maxDocs} 个文档。",
            futureYear: "{year} 年的分析暂不可用。",
            areaLimit: "单次请求最大面积为 {maxArea} 平方公里。",
            startYear: "分析数据起始于 {year} 年。"
        }
    },
    knowledgeBase: {
        title: "所有文档",
        description: "在这里您可以添加文档，AI 助手可以在整个应用程序中访问这些文档。",
        search: "搜索",
        addDocument: "添加文档",
        loading: "加载中...",
        confirmDelete: {
            title: "确认删除",
            message: "确定要删除此文档吗？此操作无法撤消。",
            confirmButton: "删除"
        },
        folders: {
            allDocuments: "所有文档",
        },
        fileUpload: {
            title: "添加新文档",
            dragActive: "将文件拖放到此处...",
            dragInactive: "将文件拖放到此处或点击上传",
            supportedFormat: "支持的格式：PDF",
            selectFiles: "选择文件",
            selectedFolder: "选择的文件夹：",
            allDocuments: "所有文档",
            buttons: {
                cancel: "取消",
                upload: "上传",
                uploadMultiple: "上传（{count} 个文件）"
            }
        },
        modals: {
            deleteDocument: {
                title: "确认删除",
                message: "确定要删除此文档吗？此操作无法撤消。",
                confirmButton: "删除"
            }
        },
        messages: {
            uploadSuccess: "文档上传成功。",
            uploadError: "处理文件时出错。",
            deleteSuccess: "文档删除成功。"
        },
        addGroup: {
            title: "添加新分组",
            placeholder: "请输入分组名称",
            buttons: {
                cancel: "取消",
                add: "添加分组"
            }
        },
        documentsTable: {
            columns: {
                name: "名称",
                owner: "所有者",
                pages: "页数",
                lastEdited: "最后编辑"
            },
            actions: {
                update: "更新",
                delete: "删除"
            },
            empty: "未找到文档。"
        },
        sidebar: {
            addGroup: "添加分组",
            actions: {
                update: "更新",
                delete: "删除"
            }
        },
        editDocument: {
            title: "编辑文档名称",
            buttons: {
                cancel: "取消",
                save: "保存"
            }
        },
        maxDocsAlert: {
            title: "已达到文档数量上限",
            description: "您已达到最大文档数量（{count}）。请删除一些文档后再上传。",
            button: "确定"
        }
    },
    artifacts: {
        title: "洞察查看器",
        closeButton: "关闭侧边栏"
    },
    mapControls: {
        tooltips: {
            layersPanel: "切换图层面板",
            drawPoint: {
                active: "点击取消",
                inactive: "在地图上选择位置"
            },
            drawPolygon: {
                active: "点击取消",
                inactive: "在地图上绘制多边形"
            },
            basemap: "切换底图",
            attributeTable: "属性表",
            chartPanel: "切换图表面板"
        }
    },
    addressSearch: {
        tooltip: "搜索地址",
        placeholder: "请输入地址",
        errors: {
            geocodeError: "地址解析失败。",
            fetchError: "获取地理编码时发生错误。",
            scriptError: {
                load: "加载 Google Maps 脚本 URL 失败",
                api: "Google Maps JavaScript API 未加载。"
            }
        }
    },
    common: {
        actions: {
            cancel: "取消",
            confirm: "确认"
        },
        input: {
            roiName: {
                placeholder: "输入 ROI 名称..."
            }
        }
    },
    map: {
        badge: {
            roiDrawingMode: "ROI 绘制模式",
            queryLayer: "图层查询"
        },
        roi: {
            toast: {
                created: 'ROI "{name}" 创建成功。'
            },
            size: "面积：{value} 平方公里"
        },
        roiControls: {
            finalizeRoi: "完成 ROI",
            roiNameDialog: {
                title: "输入 ROI 名称"
            },
            tooltips: {
                drawPolygon: {
                    active: "点击取消",
                    inactive: "在地图上选择位置"
                },
                toggleBasemap: "切换底图"
            }
        }
    },
    chat: {
        response: {
            tooltips: {
                openInsights: "打开洞察查看器"
            },
            errors: {
                usageLimit: {
                    maxRequests: "您已达到最大请求限制。",
                    maxArea: "所选区域超过允许的最大大小。"
                }
            },
        }
    },
    mapLayers: {
        panel: {
            title: "地图图层",
            actions: {
                delete: "删除",
                pickColor: "选择颜色"
            },
        }
    },
    legal: {
        privacyPolicy: {
            title: "隐私政策",
            effectiveDate: "生效日期：{date}",
            lastUpdated: "最后更新：{date}",
            sections: {
                intro: "您的隐私对我们很重要。本隐私政策说明了在您使用 Chat2Geo 平台（以下简称\"服务\"）时，我们如何收集、使用、共享和保护您的个人信息。",
                infoCollect: {
                    title: "1. 信息收集",
                    personal: {
                        title: "1.1 个人信息",
                        content: "当您创建账户或使用服务时，我们可能会收集您的姓名、电子邮件地址以及您提供的任何其他信息。\\n\\n注意：我们不会记录或收集 IP 地址。"
                    },
                    uploaded: {
                        title: "1.2 上传内容",
                        content: "我们存储您上传到服务的内容（如文本数据、矢量文件或文档），以便为您提供地理空间分析和相关功能。这包括在您的对话中处理的数据以及您与服务集成的任何文档。"
                    },
                    interaction: {
                        title: "1.3 交互数据",
                        content: "我们可能会收集有关您如何导航或与服务交互的基本信息（如功能使用情况、操作时间戳），仅用于改善用户体验和维护平台稳定性。我们不收集 IP 地址或其他网络标识符。"
                    }
                },
                usage: {
                    title: "2. 信息使用方式",
                    service: {
                        title: "2.1 提供服务",
                        content: "我们仅使用您的信息来运营和维护服务，包括运行分析、生成报告和为您显示结果。我们不会与任何第三方共享或出售您的数据供其使用。"
                    },
                    improvement: {
                        title: "2.2 改进和开发",
                        content: "我们可能会使用有关整体功能使用情况的汇总或匿名信息进行研究和开发，以增强和改进我们的服务。这些数据不会识别您或您的具体用户数据。"
                    },
                    communication: {
                        title: "2.3 通信",
                        content: "我们可能会使用您的联系信息向您发送与服务使用直接相关的管理或技术通知、更新和其他信息。"
                    }
                },
                sharing: {
                    title: "3. 信息共享和披露",
                    providers: {
                        title: "3.1 向服务提供商有限披露",
                        content: "我们可能会与帮助我们运营和改进服务的可信服务提供商共享最少量的信息。这些提供商受保密协议约束，禁止将信息用于向我们提供服务以外的任何目的。"
                    },
                    legal: {
                        title: "3.2 法律要求",
                        content: "如果法律要求或响应有效的法律程序（如传票或法院命令），我们可能会披露您的信息。"
                    },
                    business: {
                        title: "3.3 业务转让",
                        content: "在合并、收购或资产出售的情况下，您的信息可能作为该交易的一部分被转让。如果发生任何此类转让，我们将通知您。"
                    }
                },
                retention: {
                    title: "4. 数据保留和删除",
                    storage: {
                        title: "4.1 存储期限",
                        content: "只要您拥有活跃账户或需要我们为您提供服务，我们就会保留您的数据。对于测试用户，根据我们的服务条款，数据和历史记录可能会在测试期结束时被删除。"
                    },
                    deletion: {
                        title: "4.2 删除请求",
                        content: "您可以随时按照服务中的说明或直接联系我们来删除您的数据。一旦删除，您的数据可能无法恢复。"
                    }
                },
                security: {
                    title: "5. 安全措施",
                    content: "我们采取合理措施保护您的信息免受未经授权的访问、更改、披露或破坏。但是，没有任何数据传输或存储方法是 100% 安全的，我们无法保证绝对的安全性。"
                },
                children: {
                    title: "6. 儿童隐私",
                    content: "由于本服务提供专业或学术用途的专业地理空间分析工具，不面向 18 岁以下个人营销或供其使用。我们不会故意收集未成年人的个人信息。如果您是父母或监护人，并认为我们可能无意中收集了未成年人的信息，请立即与我们联系。"
                },
                changes: {
                    title: "7. 隐私政策的变更",
                    content: "我们可能会不时更新本隐私政策以反映我们做法的变化。我们将通过更新本页顶部的\"生效日期\"来通知您。在任何变更后继续使用服务即表示您接受新的隐私政策。"
                }
            }
        },
        termsOfService: {
            title: "服务条款",
            effectiveDate: "生效日期：{date}",
            lastUpdated: "最后更新：{date}",
            sections: {
                intro: "欢迎使用 Chat2Geo 平台（以下简称\"服务\"）。访问或使用本服务即表示您同意受这些服务条款（以下简称\"条款\"）的约束。如果您不同意这些条款的任何部分，则不得使用本服务。",
                beta: {
                    title: "1. Beta 测试计划",
                    limitedAccess: {
                        title: "1.1 有限访问",
                        content: "Beta 版本的服务仅通过选择授予访问权限。每个许可证都是个人专属的，不可转让。"
                    },
                    features: {
                        title: "1.2 Beta 功能",
                        content: "由于这是 Beta 版本，某些功能可能正在开发中或可能在未经通知的情况下更改。服务可能无法按预期运行，您可能会遇到错误、故障或其他问题。"
                    },
                    feedback: {
                        title: "1.3 反馈",
                        content: "我们欢迎您对服务体验的反馈。您授予我们非独占、永久、不可撤销、免版税的许可，以使用、修改和将您提供的任何反馈纳入我们的产品或服务中。"
                    }
                },
                accounts: {
                    title: "2. 用户账户",
                    creation: {
                        title: "2.1 账户创建",
                        content: "要使用服务的某些功能，您可能需要创建账户。您同意在注册过程中提供准确、最新和完整的信息，并更新此类信息以保持其准确性和完整性。"
                    },
                    security: {
                        title: "2.2 账户安全",
                        content: "您负责维护账户凭证的机密性，以及在您账户下发生的所有活动。如果您的账户被未经授权使用或发生任何其他安全漏洞，您必须立即通知我们。"
                    }
                },
                userData: {
                    title: "3. 用户内容和数据",
                    storage: {
                        title: "3.1 数据存储",
                        content: "您上传到服务的聊天记录、分析和文档（以下简称\"用户数据\"）存储在我们的系统中，以便您可以在稍后查看或重新加载它们。"
                    },
                    ownership: {
                        title: "3.2 用户数据所有权",
                        content: "您保留您上传内容的所有所有权。通过上传内容到服务，您授予我们有限的、非独占的权利，仅为向您提供服务的目的而存储、复制和处理您的内容。"
                    },
                    exclusiveUse: {
                        title: "3.3 专属使用",
                        content: "您的会话历史记录和您上传的任何文档仅用于您自己的目的，即促进和增强您进行的地理空间分析。我们不会将您的内容用于任何其他目的。"
                    }
                },
                license: {
                    title: "4. 许可和使用",
                    grant: {
                        title: "4.1 许可授予",
                        content: "根据这些条款，我们授予您有限的、不可转让的、非独占的、可撤销的许可，以合法目的使用服务。"
                    },
                    prohibited: {
                        title: "4.2 禁止行为",
                        content: "您同意不将服务用于：",
                        item1: "违反任何地方、州、国家或国际法律或法规。",
                        item2: "侵犯或盗用任何第三方的知识产权。",
                        item3: "上传有害或破坏性材料，如恶意软件或病毒。",
                        item4: "执行您无权执行的分析或操作。"
                    }
                },
                intellectualProperty: {
                    title: "5. 知识产权",
                    content: "服务中的所有知识产权，包括任何商标、标志、设计或底层技术，均由我们拥有或许可。除非本条款明确规定，否则这些条款不授予您对我们知识产权的任何权利、所有权或利益。"
                },
                disclaimers: {
                    title: "6. 免责声明",
                    beta: {
                        title: "6.1 Beta 版免责声明",
                        content: "服务按\"原样\"和\"可用性\"提供。由于这是 Beta 版本，不提供性能、可靠性或可用性的任何保证或担保。"
                    },
                    warranty: {
                        title: "6.2 无保证",
                        content: "我们否认任何和所有明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权性。"
                    }
                },
                liability: {
                    title: "7. 责任限制",
                    content: "在法律允许的最大范围内，对于因使用或无法使用服务而产生的任何间接、偶然、特殊、后果性或惩戒性损害，我们概不负责，即使我们已被告知此类损害的可能性。"
                },
                termination: {
                    title: "8. 终止和数据删除",
                    terminationPolicy: {
                        title: "8.1 终止",
                        content: "我们可以随时出于任何原因终止或暂停对服务的访问，恕不另行通知或承担责任。您也可以随时停止使用服务。"
                    },
                    dataRemoval: {
                        title: "8.2 数据删除",
                        content: "在您的 Beta 测试结束时，如果您尚未删除，您的所有数据和历史记录将被永久删除，此删除是不可逆的。"
                    }
                },
                governing: {
                    title: "9. 管辖法律和争议解决",
                    content: "这些条款应受我们公司注册地管辖法律的管辖并按其解释，不考虑其法律冲突规定。根据这些条款产生的任何争议应在该管辖区内的法院专属解决。"
                },
                changes: {
                    title: "10. 条款变更",
                    content: "我们保留随时修改这些条款的权利。如果我们做出重大更改，我们将通过更新本页顶部的\"生效日期\"来通知您。在此类更改后继续使用服务即表示接受修改后的条款。"
                }
            }
        }
    },
    changelog: {
        title: "Chat2Geo 已更新 (版本 {version}) - {date}",
        useContent: "true",
        content: `
#### 新功能
- 添加了加载谷歌地球引擎(GEE)上任何数据集的功能。
- 添加了新的数据库查询功能，可根据用户的搜索查询(由 LLM 提供)查找 GEE 数据集。
- 添加了网页抓取功能，以检索用户所选数据集的信息。

#### 改进
- 更新了 Vercel AI SDK 以获得更好的流式体验。
- 清理了代码库以提高清晰度。

#### 错误修复
- 修复了一些小错误。
`
    }
} as const