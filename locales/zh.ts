export default {
    login: {
        title: "登录您的账户",
        subtitle: "请在下方输入您的凭据",
        email: "邮箱",
        emailPlaceholder: "name@company.com",
        password: "密码",
        passwordPlaceholder: "••••••••",
        errorLabel: "错误：",
        signInButton: "登录",
        termsText: "点击继续，即表示您同意我们的",
        termsLink: "服务条款",
        andText: "和",
        privacyLink: "隐私政策",
        testimonial: "让强大的人工智能解决方案帮助您更好地应对各种环境挑战。"
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
    }
} as const