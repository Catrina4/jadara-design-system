import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { createContext as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { AlertCircle as c, Bell as l, CheckCircle2 as u, FileCheck2 as d, FileUp as f, Info as p, MessageSquare as m, Monitor as h, Moon as g, Sun as _, TriangleAlert as v, UserPlus as y, X as b } from "lucide-react";
//#region src/patterns/Navigation/Sidebar/Sidebar.tsx
function x({ brand: n = "JADARA", logo: r, sections: i, activeItem: a, onItemChange: o, user: s, collapsed: c = !1 }) {
	return /* @__PURE__ */ t("aside", {
		className: `jadara-sidebar ${c ? "jadara-sidebar--collapsed" : ""}`,
		children: [
			/* @__PURE__ */ t("div", {
				className: "jadara-sidebar__brand",
				children: [/* @__PURE__ */ e("div", {
					className: "jadara-sidebar__brand-mark",
					children: r ?? /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__default-logo",
						children: "✦"
					})
				}), /* @__PURE__ */ t("div", {
					className: "jadara-sidebar__brand-content",
					children: [/* @__PURE__ */ e("span", {
						className: "jadara-sidebar__brand-name",
						children: n
					}), /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__brand-caption",
						children: "TALENT PLATFORM"
					})]
				})]
			}),
			/* @__PURE__ */ e("nav", {
				className: "jadara-sidebar__navigation",
				children: i.map((n, r) => /* @__PURE__ */ t("div", {
					className: "jadara-sidebar__section",
					children: [n.label && /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__section-label",
						children: n.label
					}), /* @__PURE__ */ e("div", {
						className: "jadara-sidebar__items",
						children: n.items.map((n) => {
							let r = n.id === a;
							return /* @__PURE__ */ t("button", {
								type: "button",
								className: `jadara-sidebar__item ${r ? "jadara-sidebar__item--active" : ""}`,
								onClick: () => o(n.id),
								"aria-current": r ? "page" : void 0,
								children: [
									/* @__PURE__ */ e("span", {
										className: "jadara-sidebar__item-icon",
										children: n.icon
									}),
									/* @__PURE__ */ e("span", {
										className: "jadara-sidebar__item-label",
										children: n.label
									}),
									n.badge !== void 0 && /* @__PURE__ */ e("span", {
										className: "jadara-sidebar__item-badge",
										children: n.badge
									}),
									r && /* @__PURE__ */ e("span", { className: "jadara-sidebar__active-glow" })
								]
							}, n.id);
						})
					})]
				}, `${n.label ?? "section"}-${r}`))
			}),
			s && /* @__PURE__ */ t("div", {
				className: "jadara-sidebar__user",
				children: [
					/* @__PURE__ */ e("div", {
						className: "jadara-sidebar__user-avatar",
						children: s.avatar ? /* @__PURE__ */ e("img", {
							src: s.avatar,
							alt: s.name
						}) : s.name.charAt(0).toUpperCase()
					}),
					/* @__PURE__ */ t("div", {
						className: "jadara-sidebar__user-info",
						children: [/* @__PURE__ */ e("strong", { children: s.name }), s.role && /* @__PURE__ */ e("span", { children: s.role })]
					}),
					/* @__PURE__ */ e("button", {
						type: "button",
						className: "jadara-sidebar__user-menu",
						"aria-label": "Open user menu",
						children: "⋮"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/patterns/Navigation/Topbar/Topbar.tsx
function S({ onMenuClick: n, onSearch: r, onNotificationClick: i, actions: a, user: o }) {
	let [c, l] = s("");
	return /* @__PURE__ */ t("header", {
		className: "jadara-topbar",
		children: [/* @__PURE__ */ t("div", {
			className: "jadara-topbar__left",
			children: [n && /* @__PURE__ */ e("button", {
				type: "button",
				className: "jadara-topbar__menu",
				onClick: n,
				"aria-label": "Open navigation",
				children: "☰"
			}), /* @__PURE__ */ t("div", {
				className: "jadara-topbar__search",
				children: [
					/* @__PURE__ */ e("span", { children: "⌕" }),
					/* @__PURE__ */ e("input", {
						value: c,
						onChange: (e) => {
							l(e.target.value), r?.(e.target.value);
						},
						placeholder: "Search anything..."
					}),
					/* @__PURE__ */ e("kbd", { children: "⌘K" })
				]
			})]
		}), /* @__PURE__ */ t("div", {
			className: "jadara-topbar__right",
			children: [
				a,
				/* @__PURE__ */ t("button", {
					type: "button",
					className: "jadara-topbar__notification",
					onClick: i,
					"aria-label": "Notifications",
					children: ["♧", /* @__PURE__ */ e("span", { children: "3" })]
				}),
				o && /* @__PURE__ */ t("button", {
					type: "button",
					className: "jadara-topbar__user",
					children: [
						/* @__PURE__ */ e("div", {
							className: "jadara-topbar__avatar",
							children: o.avatar ? /* @__PURE__ */ e("img", {
								src: o.avatar,
								alt: o.name
							}) : o.name.charAt(0).toUpperCase()
						}),
						/* @__PURE__ */ t("div", {
							className: "jadara-topbar__user-info",
							children: [/* @__PURE__ */ e("strong", { children: o.name }), o.role && /* @__PURE__ */ e("span", { children: o.role })]
						}),
						/* @__PURE__ */ e("span", { children: "⌄" })
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/patterns/AppShell/AppShell.tsx
function C({ sidebar: n, topbar: r, children: i }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-app-shell",
		children: [/* @__PURE__ */ e(x, { ...n }), /* @__PURE__ */ t("div", {
			className: "jadara-app-shell__main",
			children: [r && /* @__PURE__ */ e(S, { ...r }), /* @__PURE__ */ e("main", {
				className: "jadara-app-shell__content",
				children: i
			})]
		})]
	});
}
//#endregion
//#region src/patterns/PageStructure/PageContainer/PageContainer.tsx
function w({ children: t, size: n = "lg", className: r = "" }) {
	return /* @__PURE__ */ e("div", {
		className: `jadara-page-container jadara-page-container--${n} ${r}`,
		children: t
	});
}
//#endregion
//#region src/patterns/PageStructure/PageHeader/PageHeader.tsx
function T({ title: n, description: r, eyebrow: i, actions: a }) {
	return /* @__PURE__ */ t("header", {
		className: "jadara-page-header",
		children: [/* @__PURE__ */ t("div", {
			className: "jadara-page-header__text",
			children: [
				i && /* @__PURE__ */ e("span", {
					className: "jadara-page-header__eyebrow",
					children: i
				}),
				/* @__PURE__ */ e("h1", { children: n }),
				r && /* @__PURE__ */ e("p", { children: r })
			]
		}), a && /* @__PURE__ */ e("div", {
			className: "jadara-page-header__actions",
			children: a
		})]
	});
}
//#endregion
//#region src/patterns/DataDisplay/StatCard/StatCard.tsx
function E({ title: n, value: r, description: i, trend: a, icon: o, tone: s = "purple" }) {
	return /* @__PURE__ */ t("article", {
		className: `jadara-stat-card jadara-stat-card--${s}`,
		children: [
			/* @__PURE__ */ t("div", {
				className: "jadara-stat-card__top",
				children: [/* @__PURE__ */ e("div", {
					className: "jadara-stat-card__icon",
					children: o
				}), /* @__PURE__ */ e("span", {
					className: "jadara-stat-card__arrow",
					children: "↗"
				})]
			}),
			/* @__PURE__ */ e("span", {
				className: "jadara-stat-card__title",
				children: n
			}),
			/* @__PURE__ */ e("strong", {
				className: "jadara-stat-card__value",
				children: r
			}),
			i && /* @__PURE__ */ e("span", {
				className: "jadara-stat-card__description",
				children: i
			}),
			a && /* @__PURE__ */ e("span", {
				className: "jadara-stat-card__trend",
				children: a
			})
		]
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function D({ children: n, variant: r = "primary", size: i = "medium", leftIcon: a, rightIcon: o, fullWidth: s = !1, className: c = "", disabled: l, ...u }) {
	let d = [
		"jadara-button",
		`jadara-button--${r}`,
		`jadara-button--${i}`,
		s ? "jadara-button--full" : "",
		c
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ t("button", {
		className: d,
		disabled: l,
		...u,
		children: [
			a && /* @__PURE__ */ e("span", {
				className: "jadara-button__icon",
				children: a
			}),
			/* @__PURE__ */ e("span", {
				className: "jadara-button__label",
				children: n
			}),
			o && /* @__PURE__ */ e("span", {
				className: "jadara-button__icon",
				children: o
			})
		]
	});
}
//#endregion
//#region src/components/Badge/Badge.tsx
function O({ children: t, variant: n = "neutral", className: r = "", ...i }) {
	return /* @__PURE__ */ e("span", {
		className: [
			"jadara-badge",
			`jadara-badge--${n}`,
			r
		].filter(Boolean).join(" "),
		...i,
		children: t
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function k({ children: t, padding: n = "md", className: r = "", ...i }) {
	return /* @__PURE__ */ e("div", {
		className: [
			"jadara-card",
			`jadara-card--padding-${n}`,
			r
		].filter(Boolean).join(" "),
		...i,
		children: t
	});
}
//#endregion
//#region src/components/Input/Input.tsx
function A({ label: n, error: r, hint: i, id: a, ...o }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-input-field",
		children: [
			n && /* @__PURE__ */ e("label", {
				htmlFor: a,
				className: "jadara-input-field__label",
				children: n
			}),
			/* @__PURE__ */ e("input", {
				id: a,
				className: ["jadara-input", r ? "jadara-input--error" : ""].filter(Boolean).join(" "),
				...o
			}),
			r && /* @__PURE__ */ e("span", {
				className: "jadara-input-field__error",
				children: r
			}),
			!r && i && /* @__PURE__ */ e("span", {
				className: "jadara-input-field__hint",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/Textarea/Textarea.tsx
function j({ label: n, error: r, hint: i, id: a, ...o }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-textarea-field",
		children: [
			n && /* @__PURE__ */ e("label", {
				htmlFor: a,
				className: "jadara-textarea-field__label",
				children: n
			}),
			/* @__PURE__ */ e("textarea", {
				id: a,
				className: ["jadara-textarea", r ? "jadara-textarea--error" : ""].filter(Boolean).join(" "),
				...o
			}),
			r && /* @__PURE__ */ e("span", {
				className: "jadara-textarea-field__error",
				children: r
			}),
			!r && i && /* @__PURE__ */ e("span", {
				className: "jadara-textarea-field__hint",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/Avatar/Avatar.tsx
function M({ size: t = "md", fallback: n = "U", src: r, alt: i = "", ...a }) {
	return r ? /* @__PURE__ */ e("img", {
		className: `jadara-avatar jadara-avatar--${t}`,
		src: r,
		alt: i,
		...a
	}) : /* @__PURE__ */ e("div", {
		className: `jadara-avatar jadara-avatar--${t}`,
		"aria-label": i,
		children: n.slice(0, 2).toUpperCase()
	});
}
//#endregion
//#region src/components/IconButton/IconButton.tsx
function N({ icon: t, size: n = "md", label: r, className: i = "", ...a }) {
	return /* @__PURE__ */ e("button", {
		type: "button",
		"aria-label": r,
		title: r,
		className: `jadara-icon-button jadara-icon-button--${n} ${i}`,
		...a,
		children: t
	});
}
//#endregion
//#region src/components/Divider/Divider.tsx
function P({ className: t = "", ...n }) {
	return /* @__PURE__ */ e("hr", {
		className: `jadara-divider ${t}`,
		...n
	});
}
//#endregion
//#region src/patterns/DataDisplay/ProjectCard/ProjectCard.tsx
function F({ title: n, description: r, cover: i, author: a, status: o, technologies: s = [], date: c, onClick: l }) {
	return /* @__PURE__ */ t("article", {
		className: `jadara-project-card ${l ? "jadara-project-card--clickable" : ""}`,
		onClick: l,
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-project-card__cover",
			children: i ? /* @__PURE__ */ e("img", {
				src: i,
				alt: ""
			}) : /* @__PURE__ */ e("div", {
				className: "jadara-project-card__placeholder",
				children: "✦"
			})
		}), /* @__PURE__ */ t("div", {
			className: "jadara-project-card__body",
			children: [
				/* @__PURE__ */ t("div", {
					className: "jadara-project-card__heading",
					children: [/* @__PURE__ */ t("div", { children: [/* @__PURE__ */ e("h3", { children: n }), a && /* @__PURE__ */ t("span", { children: ["by ", a] })] }), o]
				}),
				r && /* @__PURE__ */ e("p", { children: r }),
				s.length > 0 && /* @__PURE__ */ e("div", {
					className: "jadara-project-card__technologies",
					children: s.map((t) => /* @__PURE__ */ e("span", { children: t }, t))
				}),
				c && /* @__PURE__ */ e("small", { children: c })
			]
		})]
	});
}
//#endregion
//#region src/patterns/DataDisplay/SkillCard/SkillCard.tsx
function I({ name: n, level: r, icon: i, description: a, progress: o }) {
	return /* @__PURE__ */ t("article", {
		className: "jadara-skill-card",
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-skill-card__icon",
			children: i ?? "✦"
		}), /* @__PURE__ */ t("div", {
			className: "jadara-skill-card__content",
			children: [
				/* @__PURE__ */ t("div", {
					className: "jadara-skill-card__heading",
					children: [/* @__PURE__ */ e("h3", { children: n }), /* @__PURE__ */ e("span", {
						className: `jadara-skill-card__level jadara-skill-card__level--${r.toLowerCase()}`,
						children: r
					})]
				}),
				a && /* @__PURE__ */ e("p", { children: a }),
				o !== void 0 && /* @__PURE__ */ t("div", {
					className: "jadara-skill-card__progress",
					children: [/* @__PURE__ */ t("div", { children: [/* @__PURE__ */ e("span", { children: "Progress" }), /* @__PURE__ */ t("strong", { children: [o, "%"] })] }), /* @__PURE__ */ e("div", {
						className: "jadara-skill-card__progress-track",
						children: /* @__PURE__ */ e("span", { style: { width: `${Math.min(100, Math.max(0, o))}%` } })
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/patterns/DataDisplay/ProfileCard/ProfileCard.tsx
function L({ name: n, role: r, avatar: i, location: a, description: o, meta: s }) {
	return /* @__PURE__ */ t("article", {
		className: "jadara-profile-card",
		children: [
			/* @__PURE__ */ t("div", {
				className: "jadara-profile-card__top",
				children: [/* @__PURE__ */ e("div", {
					className: "jadara-profile-card__avatar",
					children: i && /* @__PURE__ */ e("img", {
						src: i,
						alt: n
					})
				}), /* @__PURE__ */ t("div", { children: [
					/* @__PURE__ */ e("h3", { children: n }),
					r && /* @__PURE__ */ e("span", { children: r }),
					a && /* @__PURE__ */ t("span", { children: ["📍 ", a] })
				] })]
			}),
			o && /* @__PURE__ */ e("p", { children: o }),
			s
		]
	});
}
//#endregion
//#region src/patterns/DataDisplay/EvidenceCard/EvidenceCard.tsx
function R({ title: n, type: r, date: i, icon: a, action: o }) {
	return /* @__PURE__ */ t("article", {
		className: "jadara-evidence-card",
		children: [
			/* @__PURE__ */ e("div", {
				className: "jadara-evidence-card__icon",
				children: a ?? "◫"
			}),
			/* @__PURE__ */ t("div", {
				className: "jadara-evidence-card__content",
				children: [/* @__PURE__ */ e("h3", { children: n }), /* @__PURE__ */ e("p", { children: [r, i].filter(Boolean).join(" • ") })]
			}),
			/* @__PURE__ */ e("div", {
				className: "jadara-evidence-card__action",
				children: o ?? "→"
			})
		]
	});
}
//#endregion
//#region src/patterns/DataDisplay/ActivityItem/ActivityItem.tsx
function ee({ title: n, description: r, time: i, icon: a }) {
	return /* @__PURE__ */ t("article", {
		className: "jadara-activity-item",
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-activity-item__icon",
			children: a ?? "✦"
		}), /* @__PURE__ */ t("div", {
			className: "jadara-activity-item__content",
			children: [/* @__PURE__ */ t("p", { children: [/* @__PURE__ */ e("strong", { children: n }), r && ` ${r}`] }), /* @__PURE__ */ e("time", { children: i })]
		})]
	});
}
//#endregion
//#region src/patterns/Status/StatusBadge/StatusBadge.tsx
var z = {
	pending: "Pending",
	"in-review": "In Review",
	approved: "Approved",
	rejected: "Rejected",
	draft: "Draft",
	completed: "Completed"
};
function B({ status: t, children: n }) {
	return /* @__PURE__ */ e("span", {
		className: `jadara-status-badge jadara-status-badge--${t}`,
		children: n ?? z[t]
	});
}
//#endregion
//#region src/patterns/Status/VerificationStatus/VerificationStatus.tsx
var V = [
	{
		id: "submitted",
		label: "Submitted"
	},
	{
		id: "in-review",
		label: "Under Review"
	},
	{
		id: "approved",
		label: "Approved"
	},
	{
		id: "completed",
		label: "Completed"
	}
];
function H({ current: n }) {
	let r = V.findIndex((e) => e.id === n);
	return /* @__PURE__ */ e("div", {
		className: "jadara-verification",
		children: V.map((n, i) => {
			let a = i <= r;
			return /* @__PURE__ */ t("div", {
				className: "jadara-verification__step",
				children: [
					/* @__PURE__ */ e("div", {
						className: `jadara-verification__dot ${a ? "jadara-verification__dot--active" : ""}`,
						children: a ? "✓" : ""
					}),
					/* @__PURE__ */ e("span", { children: n.label }),
					i < V.length - 1 && /* @__PURE__ */ e("div", { className: `jadara-verification__line ${i < r ? "jadara-verification__line--active" : ""}` })
				]
			}, n.id);
		})
	});
}
//#endregion
//#region src/patterns/Status/EmptyState/EmptyState.tsx
function U({ title: n, description: r, icon: i, action: a }) {
	return /* @__PURE__ */ t("section", {
		className: "jadara-empty-state",
		children: [
			/* @__PURE__ */ e("div", {
				className: "jadara-empty-state__icon",
				children: i ?? "◇"
			}),
			/* @__PURE__ */ e("h2", { children: n }),
			r && /* @__PURE__ */ e("p", { children: r }),
			a && /* @__PURE__ */ e("div", {
				className: "jadara-empty-state__action",
				children: a
			})
		]
	});
}
//#endregion
//#region src/patterns/Forms/FormField/FormField.tsx
function W({ label: n, hint: r, error: i, required: a, children: o, id: s, ...c }) {
	let l = s ?? `jadara-field-${n.toLowerCase().replace(/\s+/g, "-")}`;
	return /* @__PURE__ */ t("div", {
		className: "jadara-form-field",
		children: [
			/* @__PURE__ */ t("label", {
				htmlFor: l,
				children: [n, a && /* @__PURE__ */ e("span", { children: "*" })]
			}),
			o ?? /* @__PURE__ */ e("input", {
				id: l,
				...c
			}),
			i ? /* @__PURE__ */ e("small", {
				className: "jadara-form-field__error",
				children: i
			}) : r ? /* @__PURE__ */ e("small", {
				className: "jadara-form-field__hint",
				children: r
			}) : null
		]
	});
}
//#endregion
//#region src/patterns/Forms/TechnologyInput/TechnologyInput.tsx
function G({ value: n, onChange: r, placeholder: i = "Add technology..." }) {
	let [a, o] = s(""), c = () => {
		let e = a.trim();
		if (e) {
			if (n.some((t) => t.toLowerCase() === e.toLowerCase())) {
				o("");
				return;
			}
			r([...n, e]), o("");
		}
	}, l = (e) => {
		(e.key === "Enter" || e.key === ",") && (e.preventDefault(), c()), e.key === "Backspace" && !a && n.length && r(n.slice(0, -1));
	}, u = (e) => {
		r(n.filter((t) => t !== e));
	};
	return /* @__PURE__ */ t("div", {
		className: "jadara-technology-input",
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-technology-input__tags",
			children: n.map((n) => /* @__PURE__ */ t("span", { children: [n, /* @__PURE__ */ e("button", {
				type: "button",
				onClick: () => u(n),
				"aria-label": `Remove ${n}`,
				children: "×"
			})] }, n))
		}), /* @__PURE__ */ e("input", {
			value: a,
			onChange: (e) => o(e.target.value),
			onKeyDown: l,
			onBlur: c,
			placeholder: n.length ? "Add another..." : i
		})]
	});
}
//#endregion
//#region src/patterns/PageStructure/Section/Section.tsx
function K({ title: n, description: r, action: i, children: a }) {
	return /* @__PURE__ */ t("section", {
		className: "jadara-section",
		children: [(n || r || i) && /* @__PURE__ */ t("div", {
			className: "jadara-section__header",
			children: [/* @__PURE__ */ t("div", { children: [n && /* @__PURE__ */ e("h2", {
				className: "jadara-section__title",
				children: n
			}), r && /* @__PURE__ */ e("p", {
				className: "jadara-section__description",
				children: r
			})] }), i && /* @__PURE__ */ e("div", {
				className: "jadara-section__action",
				children: i
			})]
		}), /* @__PURE__ */ e("div", {
			className: "jadara-section__content",
			children: a
		})]
	});
}
//#endregion
//#region src/patterns/Forms/FileUpload/FileUpload.tsx
function q({ accept: n, multiple: r = !1, files: i = [], onChange: a, onRemove: s, label: c = "Upload files", description: l = "Drag and drop files here or click to browse." }) {
	let u = o(null);
	function d(e) {
		let t = Array.from(e.target.files ?? []);
		a?.(r ? [...i, ...t] : t);
	}
	return /* @__PURE__ */ t("div", {
		className: "jadara-file-upload",
		children: [/* @__PURE__ */ t("button", {
			type: "button",
			className: "jadara-file-upload__dropzone",
			onClick: () => u.current?.click(),
			children: [
				/* @__PURE__ */ e("span", {
					className: "jadara-file-upload__icon",
					children: /* @__PURE__ */ e(f, { size: 24 })
				}),
				/* @__PURE__ */ e("span", {
					className: "jadara-file-upload__label",
					children: c
				}),
				/* @__PURE__ */ e("span", {
					className: "jadara-file-upload__description",
					children: l
				}),
				/* @__PURE__ */ e("input", {
					ref: u,
					type: "file",
					accept: n,
					multiple: r,
					onChange: d,
					hidden: !0
				})
			]
		}), i.length > 0 && /* @__PURE__ */ e("div", {
			className: "jadara-file-upload__files",
			children: i.map((n) => /* @__PURE__ */ t("div", {
				className: "jadara-file-upload__file",
				children: [/* @__PURE__ */ t("div", { children: [/* @__PURE__ */ e("p", {
					className: "jadara-file-upload__file-name",
					children: n.name
				}), /* @__PURE__ */ t("p", {
					className: "jadara-file-upload__file-size",
					children: [(n.size / 1024).toFixed(1), " KB"]
				})] }), s && /* @__PURE__ */ e("button", {
					type: "button",
					"aria-label": `Remove ${n.name}`,
					onClick: () => s(n),
					children: /* @__PURE__ */ e(b, { size: 16 })
				})]
			}, `${n.name}-${n.size}-${n.lastModified}`))
		})]
	});
}
//#endregion
//#region src/patterns/Status/Alert/Alert.tsx
var J = {
	info: p,
	success: u,
	warning: v,
	error: c
};
function Y({ variant: n = "info", title: r, children: i, dismissible: a = !1, onDismiss: o }) {
	let s = J[n];
	return /* @__PURE__ */ t("div", {
		className: `jadara-alert jadara-alert--${n}`,
		role: "alert",
		children: [
			/* @__PURE__ */ e(s, {
				size: 20,
				className: "jadara-alert__icon"
			}),
			/* @__PURE__ */ t("div", {
				className: "jadara-alert__content",
				children: [r && /* @__PURE__ */ e("h3", {
					className: "jadara-alert__title",
					children: r
				}), i && /* @__PURE__ */ e("div", {
					className: "jadara-alert__message",
					children: i
				})]
			}),
			a && o && /* @__PURE__ */ e("button", {
				type: "button",
				className: "jadara-alert__close",
				onClick: o,
				"aria-label": "Dismiss alert",
				children: /* @__PURE__ */ e(b, { size: 18 })
			})
		]
	});
}
//#endregion
//#region src/patterns/Notifications/NotificationItem/NotificationItem.tsx
var X = {
	system: l,
	review: d,
	message: m,
	success: u,
	connection: y
};
function Z({ title: n, description: r, time: i, type: a = "system", unread: o = !1, onClick: s }) {
	let c = X[a];
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: `jadara-notification-item ${o ? "jadara-notification-item--unread" : ""}`,
		onClick: s,
		children: [
			/* @__PURE__ */ e("span", {
				className: "jadara-notification-item__icon",
				children: /* @__PURE__ */ e(c, { size: 18 })
			}),
			/* @__PURE__ */ t("span", {
				className: "jadara-notification-item__content",
				children: [
					/* @__PURE__ */ e("span", {
						className: "jadara-notification-item__title",
						children: n
					}),
					r && /* @__PURE__ */ e("span", {
						className: "jadara-notification-item__description",
						children: r
					}),
					/* @__PURE__ */ e("span", {
						className: "jadara-notification-item__time",
						children: i
					})
				]
			}),
			o && /* @__PURE__ */ e("span", {
				className: "jadara-notification-item__dot",
				"aria-label": "Unread"
			})
		]
	});
}
//#endregion
//#region src/theme/ThemeProvider.tsx
var Q = n(void 0), $ = "jadara-theme";
function te() {
	return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ne() {
	if (typeof window > "u") return "system";
	let e = localStorage.getItem($);
	return e === "light" || e === "dark" || e === "system" ? e : "system";
}
function re({ children: t }) {
	let [n, r] = s(ne), o = n === "system" ? te() : n;
	i(() => {
		document.documentElement.setAttribute("data-theme", o), localStorage.setItem($, n);
	}, [n, o]), i(() => {
		if (n !== "system") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			let t = e.matches ? "dark" : "light";
			document.documentElement.setAttribute("data-theme", t);
		};
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	let c = (e) => {
		r(e);
	}, l = () => {
		r((e) => e === "light" ? "dark" : e === "dark" ? "light" : o === "light" ? "dark" : "light");
	}, u = a(() => ({
		theme: n,
		resolvedTheme: o,
		setTheme: c,
		toggleTheme: l
	}), [n, o]);
	return /* @__PURE__ */ e(Q.Provider, {
		value: u,
		children: t
	});
}
function ie() {
	let e = r(Q);
	if (!e) throw Error("useTheme must be used inside ThemeProvider");
	return e;
}
//#endregion
//#region src/theme/ThemeToggle.tsx
var ae = [
	{
		value: "light",
		label: "Light",
		icon: _
	},
	{
		value: "dark",
		label: "Dark",
		icon: g
	},
	{
		value: "system",
		label: "System",
		icon: h
	}
];
function oe() {
	let { theme: n, setTheme: r } = ie();
	return /* @__PURE__ */ e("div", {
		className: "theme-toggle",
		role: "group",
		"aria-label": "Theme selection",
		children: ae.map((i) => {
			let a = i.icon, o = n === i.value;
			return /* @__PURE__ */ t("button", {
				type: "button",
				className: `theme-toggle__button ${o ? "theme-toggle__button--active" : ""}`,
				onClick: () => r(i.value),
				"aria-label": `Use ${i.label} theme`,
				"aria-pressed": o,
				children: [/* @__PURE__ */ e(a, { size: 17 }), /* @__PURE__ */ e("span", { children: i.label })]
			}, i.value);
		})
	});
}
//#endregion
export { ee as ActivityItem, Y as Alert, C as AppShell, M as Avatar, O as Badge, D as Button, k as Card, P as Divider, U as EmptyState, R as EvidenceCard, q as FileUpload, W as FormField, N as IconButton, A as Input, Z as NotificationItem, w as PageContainer, T as PageHeader, L as ProfileCard, F as ProjectCard, K as Section, x as Sidebar, I as SkillCard, E as StatCard, B as StatusBadge, G as TechnologyInput, j as Textarea, re as ThemeProvider, oe as ThemeToggle, S as Topbar, H as VerificationStatus };

//# sourceMappingURL=index.js.map