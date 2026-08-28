import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { AlertCircle as n, Bell as r, CheckCircle2 as i, ChevronDown as a, FileCheck2 as o, FileUp as s, Info as c, Menu as l, MessageSquare as u, Monitor as d, Moon as f, Search as p, Sun as m, TriangleAlert as h, UserPlus as ee, X as g } from "lucide-react";
import { createContext as _, useContext as v, useEffect as y, useMemo as te, useRef as ne, useState as b } from "react";
//#region src/components/Button/Button.tsx
function re({ children: n, variant: r = "primary", size: i = "medium", leftIcon: a, rightIcon: o, fullWidth: s = !1, className: c = "", disabled: l, type: u = "button", ...d }) {
	let f = [
		"jadara-button",
		`jadara-button--${r}`,
		`jadara-button--${i}`,
		s ? "jadara-button--full" : "",
		c
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ t("button", {
		type: u,
		className: f,
		disabled: l,
		...d,
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
function x({ children: t, variant: n = "neutral", className: r = "", ...i }) {
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
function S({ children: t, padding: n = "md", className: r = "", ...i }) {
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
function C({ label: n, error: r, hint: i, id: a, ...o }) {
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
function w({ label: n, error: r, hint: i, id: a, ...o }) {
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
function T({ size: t = "md", fallback: n = "U", src: r, alt: i = "", ...a }) {
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
function E({ icon: t, size: n = "md", label: r, className: i = "", ...a }) {
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
function D({ className: t = "", ...n }) {
	return /* @__PURE__ */ e("hr", {
		className: `jadara-divider ${t}`,
		...n
	});
}
//#endregion
//#region src/components/SearchField/SearchField.tsx
function O({ value: n, onChange: r, placeholder: i = "Search...", disabled: a = !1 }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-search-field",
		children: [
			/* @__PURE__ */ e(p, {
				size: 15,
				className: "jadara-search-field__icon"
			}),
			/* @__PURE__ */ e("input", {
				value: n,
				disabled: a,
				placeholder: i,
				onChange: (e) => r(e.target.value)
			}),
			n && /* @__PURE__ */ e("button", {
				type: "button",
				className: "jadara-search-field__clear",
				onClick: () => r(""),
				"aria-label": "Clear search",
				children: /* @__PURE__ */ e(g, { size: 14 })
			})
		]
	});
}
//#endregion
//#region src/components/Select/Select.tsx
function k({ value: n, onChange: r, options: i, placeholder: o = "Select...", disabled: s = !1, ariaLabel: c }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-select",
		children: [/* @__PURE__ */ t("select", {
			value: n,
			disabled: s,
			"aria-label": c,
			onChange: (e) => r(e.target.value),
			children: [!n && /* @__PURE__ */ e("option", {
				value: "",
				children: o
			}), i.map((t) => /* @__PURE__ */ e("option", {
				value: t.value,
				children: t.label
			}, t.value))]
		}), /* @__PURE__ */ e(a, {
			size: 15,
			className: "jadara-select__icon"
		})]
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function A({ open: n, onClose: r, title: i, description: a, children: o, footer: s, size: c = "medium" }) {
	return n ? /* @__PURE__ */ e("div", {
		className: "jadara-modal__overlay",
		onMouseDown: (e) => {
			e.target === e.currentTarget && r();
		},
		children: /* @__PURE__ */ t("div", {
			className: ["jadara-modal", `jadara-modal--${c}`].join(" "),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "jadara-modal-title",
			children: [
				/* @__PURE__ */ t("div", {
					className: "jadara-modal__header",
					children: [/* @__PURE__ */ t("div", { children: [/* @__PURE__ */ e("h2", {
						id: "jadara-modal-title",
						children: i
					}), a && /* @__PURE__ */ e("p", { children: a })] }), /* @__PURE__ */ e("button", {
						type: "button",
						className: "jadara-modal__close",
						onClick: r,
						"aria-label": "Close",
						children: /* @__PURE__ */ e(g, { size: 17 })
					})]
				}),
				o && /* @__PURE__ */ e("div", {
					className: "jadara-modal__body",
					children: o
				}),
				s && /* @__PURE__ */ e("div", {
					className: "jadara-modal__footer",
					children: s
				})
			]
		})
	}) : null;
}
//#endregion
//#region src/patterns/Navigation/Sidebar/Sidebar.tsx
function j({ brand: n = "JADARA", caption: r = "Talent Platform", logo: i, sections: a, activeItem: o, onItemChange: s, user: c, collapsed: l = !1 }) {
	return /* @__PURE__ */ t("aside", {
		className: ["jadara-sidebar", l ? "jadara-sidebar--collapsed" : ""].join(" "),
		children: [
			/* @__PURE__ */ t("div", {
				className: "jadara-sidebar__brand",
				children: [/* @__PURE__ */ e("div", {
					className: "jadara-sidebar__logo",
					children: i ?? /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__logo-symbol",
						children: "✦"
					})
				}), /* @__PURE__ */ t("div", {
					className: "jadara-sidebar__brand-copy",
					children: [/* @__PURE__ */ e("span", {
						className: "jadara-sidebar__brand-name",
						children: n
					}), /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__brand-caption",
						children: r
					})]
				})]
			}),
			/* @__PURE__ */ e("nav", {
				className: "jadara-sidebar__navigation",
				children: a.map((n, r) => /* @__PURE__ */ t("div", {
					className: "jadara-sidebar__section",
					children: [n.label && /* @__PURE__ */ e("span", {
						className: "jadara-sidebar__section-label",
						children: n.label
					}), /* @__PURE__ */ e("div", {
						className: "jadara-sidebar__items",
						children: n.items.map((n) => {
							let r = n.id === o;
							return /* @__PURE__ */ t("button", {
								type: "button",
								className: ["jadara-sidebar__item", r ? "jadara-sidebar__item--active" : ""].filter(Boolean).join(" "),
								onClick: () => s(n.id),
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
									})
								]
							}, n.id);
						})
					})]
				}, n.label ?? `section-${r}`))
			}),
			c && /* @__PURE__ */ t("div", {
				className: "jadara-sidebar__user",
				children: [/* @__PURE__ */ e("div", {
					className: "jadara-sidebar__avatar",
					children: c.avatar ? /* @__PURE__ */ e("img", {
						src: c.avatar,
						alt: c.name
					}) : c.name.charAt(0).toUpperCase()
				}), /* @__PURE__ */ t("div", {
					className: "jadara-sidebar__user-copy",
					children: [/* @__PURE__ */ e("strong", { children: c.name }), c.role && /* @__PURE__ */ e("span", { children: c.role })]
				})]
			})
		]
	});
}
//#endregion
//#region src/patterns/Navigation/Topbar/Topbar.tsx
function M({ onMenuClick: n, onSearch: i, onNotificationClick: a, actions: o, user: s }) {
	return /* @__PURE__ */ t("header", {
		className: "jadara-topbar",
		children: [/* @__PURE__ */ t("div", {
			className: "jadara-topbar__left",
			children: [n && /* @__PURE__ */ e("button", {
				type: "button",
				className: "jadara-topbar__menu",
				onClick: n,
				"aria-label": "Open navigation",
				children: /* @__PURE__ */ e(l, { size: 18 })
			}), /* @__PURE__ */ t("div", {
				className: "jadara-topbar__search",
				children: [/* @__PURE__ */ e(p, { size: 14 }), /* @__PURE__ */ e("input", {
					placeholder: "Search for talents, skills, or projects...",
					onChange: (e) => i?.(e.target.value)
				})]
			})]
		}), /* @__PURE__ */ t("div", {
			className: "jadara-topbar__right",
			children: [
				o,
				/* @__PURE__ */ t("button", {
					type: "button",
					className: "jadara-topbar__icon-button",
					onClick: a,
					"aria-label": "Notifications",
					children: [/* @__PURE__ */ e(r, { size: 16 }), /* @__PURE__ */ e("span", { className: "jadara-topbar__notification-dot" })]
				}),
				s && /* @__PURE__ */ t("button", {
					type: "button",
					className: "jadara-topbar__user",
					children: [
						/* @__PURE__ */ e("span", {
							className: "jadara-topbar__avatar",
							children: s.avatar ? /* @__PURE__ */ e("img", {
								src: s.avatar,
								alt: s.name
							}) : s.name.charAt(0).toUpperCase()
						}),
						/* @__PURE__ */ t("span", {
							className: "jadara-topbar__user-copy",
							children: [/* @__PURE__ */ e("strong", { children: s.name }), s.role && /* @__PURE__ */ e("span", { children: s.role })]
						}),
						/* @__PURE__ */ e("span", {
							className: "jadara-topbar__chevron",
							children: "⌄"
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/patterns/AppShell/AppShell.tsx
function N({ sidebar: n, topbar: r, children: i }) {
	return /* @__PURE__ */ t("div", {
		className: "jadara-app-shell",
		children: [/* @__PURE__ */ e(j, { ...n }), /* @__PURE__ */ t("div", {
			className: "jadara-app-shell__main",
			children: [r && /* @__PURE__ */ e(M, { ...r }), /* @__PURE__ */ e("main", {
				className: "jadara-app-shell__content",
				children: i
			})]
		})]
	});
}
//#endregion
//#region src/patterns/PageStructure/PageContainer/PageContainer.tsx
function P({ children: t, size: n = "lg", className: r = "" }) {
	return /* @__PURE__ */ e("div", {
		className: `jadara-page-container jadara-page-container--${n} ${r}`,
		children: t
	});
}
//#endregion
//#region src/patterns/PageStructure/PageHeader/PageHeader.tsx
function F({ title: n, description: r, eyebrow: i, actions: a }) {
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
//#region src/patterns/PageStructure/Section/Section.tsx
function I({ title: n, description: r, action: i, children: a }) {
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
//#region src/patterns/DataDisplay/StatCard/StatCard.tsx
function L({ title: n, value: r, description: i, trend: a, icon: o, tone: s = "purple" }) {
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
//#region src/patterns/DataDisplay/ProjectCard/ProjectCard.tsx
function R({ title: n, description: r, cover: i, author: a, status: o, technologies: s = [], date: c, onClick: l }) {
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
function z({ name: n, level: r, icon: i, description: a, progress: o }) {
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
function B({ name: n, role: r, avatar: i, location: a, description: o, meta: s }) {
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
function ie({ title: n, type: r, date: i, icon: a, action: o }) {
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
function V({ title: n, description: r, time: i, icon: a }) {
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
//#region src/patterns/DataTable/DataTable.tsx
function H({ columns: n, data: r, getRowKey: i, emptyMessage: a = "No data available.", onRowClick: o }) {
	let s = { "--jadara-table-columns": n.length };
	return /* @__PURE__ */ t(S, {
		className: "jadara-data-table",
		padding: "sm",
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-data-table__header",
			style: s,
			children: n.map((t) => /* @__PURE__ */ e("div", {
				className: "jadara-data-table__heading",
				children: t.header
			}, t.key))
		}), /* @__PURE__ */ e("div", {
			className: "jadara-data-table__body",
			children: r.length === 0 ? /* @__PURE__ */ e("div", {
				className: "jadara-data-table__empty",
				children: a
			}) : r.map((t) => /* @__PURE__ */ e("div", {
				className: ["jadara-data-table__row", o ? "jadara-data-table__row--clickable" : ""].filter(Boolean).join(" "),
				style: s,
				onClick: () => o?.(t),
				children: n.map((n) => /* @__PURE__ */ e("div", {
					className: "jadara-data-table__cell",
					children: n.render(t)
				}, n.key))
			}, i(t)))
		})]
	});
}
//#endregion
//#region src/patterns/Status/StatusBadge/StatusBadge.tsx
var U = {
	pending: "Pending",
	"in-review": "In Review",
	approved: "Approved",
	rejected: "Rejected",
	draft: "Draft",
	completed: "Completed"
};
function W({ status: t, children: n }) {
	return /* @__PURE__ */ e("span", {
		className: `jadara-status-badge jadara-status-badge--${t}`,
		children: n ?? U[t]
	});
}
//#endregion
//#region src/patterns/Status/VerificationStatus/VerificationStatus.tsx
var G = [
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
function K({ current: n }) {
	let r = G.findIndex((e) => e.id === n);
	return /* @__PURE__ */ e("div", {
		className: "jadara-verification",
		children: G.map((n, i) => {
			let a = i <= r;
			return /* @__PURE__ */ t("div", {
				className: "jadara-verification__step",
				children: [
					/* @__PURE__ */ e("div", {
						className: `jadara-verification__dot ${a ? "jadara-verification__dot--active" : ""}`,
						children: a ? "✓" : ""
					}),
					/* @__PURE__ */ e("span", { children: n.label }),
					i < G.length - 1 && /* @__PURE__ */ e("div", { className: `jadara-verification__line ${i < r ? "jadara-verification__line--active" : ""}` })
				]
			}, n.id);
		})
	});
}
//#endregion
//#region src/patterns/Status/EmptyState/EmptyState.tsx
function q({ title: n, description: r, icon: i, action: a }) {
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
//#region src/patterns/Status/Alert/Alert.tsx
var J = {
	info: c,
	success: i,
	warning: h,
	error: n
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
				children: /* @__PURE__ */ e(g, { size: 18 })
			})
		]
	});
}
//#endregion
//#region src/patterns/Forms/FormField/FormField.tsx
function ae({ label: n, hint: r, error: i, required: a, children: o, id: s, ...c }) {
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
function oe({ value: n, onChange: r, placeholder: i = "Add technology..." }) {
	let [a, o] = b(""), s = () => {
		let e = a.trim();
		if (e) {
			if (n.some((t) => t.toLowerCase() === e.toLowerCase())) {
				o("");
				return;
			}
			r([...n, e]), o("");
		}
	}, c = (e) => {
		(e.key === "Enter" || e.key === ",") && (e.preventDefault(), s()), e.key === "Backspace" && !a && n.length && r(n.slice(0, -1));
	}, l = (e) => {
		r(n.filter((t) => t !== e));
	};
	return /* @__PURE__ */ t("div", {
		className: "jadara-technology-input",
		children: [/* @__PURE__ */ e("div", {
			className: "jadara-technology-input__tags",
			children: n.map((n) => /* @__PURE__ */ t("span", { children: [n, /* @__PURE__ */ e("button", {
				type: "button",
				onClick: () => l(n),
				"aria-label": `Remove ${n}`,
				children: "×"
			})] }, n))
		}), /* @__PURE__ */ e("input", {
			value: a,
			onChange: (e) => o(e.target.value),
			onKeyDown: c,
			onBlur: s,
			placeholder: n.length ? "Add another..." : i
		})]
	});
}
//#endregion
//#region src/patterns/Forms/FileUpload/FileUpload.tsx
function se({ accept: n, multiple: r = !1, files: i = [], onChange: a, onRemove: o, label: c = "Upload files", description: l = "Drag and drop files here or click to browse." }) {
	let u = ne(null);
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
					children: /* @__PURE__ */ e(s, { size: 24 })
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
				})] }), o && /* @__PURE__ */ e("button", {
					type: "button",
					"aria-label": `Remove ${n.name}`,
					onClick: () => o(n),
					children: /* @__PURE__ */ e(g, { size: 16 })
				})]
			}, `${n.name}-${n.size}-${n.lastModified}`))
		})]
	});
}
//#endregion
//#region src/patterns/Notifications/NotificationItem/NotificationItem.tsx
var ce = {
	system: r,
	review: o,
	message: u,
	success: i,
	connection: ee
};
function le({ title: n, description: r, time: i, type: a = "system", unread: o = !1, onClick: s }) {
	let c = ce[a];
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
var X = _(void 0), Z = "jadara-theme";
function ue() {
	return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Q() {
	if (typeof window > "u") return "system";
	let e = localStorage.getItem(Z);
	return e === "light" || e === "dark" || e === "system" ? e : "system";
}
function de({ children: t }) {
	let [n, r] = b(Q), i = n === "system" ? ue() : n;
	y(() => {
		document.documentElement.setAttribute("data-theme", i), localStorage.setItem(Z, n);
	}, [n, i]), y(() => {
		if (n !== "system") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			let t = e.matches ? "dark" : "light";
			document.documentElement.setAttribute("data-theme", t);
		};
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	let a = (e) => {
		r(e);
	}, o = () => {
		r((e) => e === "light" ? "dark" : e === "dark" ? "light" : i === "light" ? "dark" : "light");
	}, s = te(() => ({
		theme: n,
		resolvedTheme: i,
		setTheme: a,
		toggleTheme: o
	}), [n, i]);
	return /* @__PURE__ */ e(X.Provider, {
		value: s,
		children: t
	});
}
function $() {
	let e = v(X);
	if (!e) throw Error("useTheme must be used inside ThemeProvider");
	return e;
}
//#endregion
//#region src/theme/ThemeToggle.tsx
var fe = [
	{
		value: "light",
		label: "Light",
		icon: m
	},
	{
		value: "dark",
		label: "Dark",
		icon: f
	},
	{
		value: "system",
		label: "System",
		icon: d
	}
];
function pe() {
	let { theme: n, setTheme: r } = $();
	return /* @__PURE__ */ e("div", {
		className: "theme-toggle",
		role: "group",
		"aria-label": "Theme selection",
		children: fe.map((i) => {
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
export { V as ActivityItem, Y as Alert, N as AppShell, T as Avatar, x as Badge, re as Button, S as Card, H as DataTable, D as Divider, q as EmptyState, ie as EvidenceCard, se as FileUpload, ae as FormField, E as IconButton, C as Input, A as Modal, le as NotificationItem, P as PageContainer, F as PageHeader, B as ProfileCard, R as ProjectCard, O as SearchField, I as Section, k as Select, j as Sidebar, z as SkillCard, L as StatCard, W as StatusBadge, oe as TechnologyInput, w as Textarea, de as ThemeProvider, pe as ThemeToggle, M as Topbar, K as VerificationStatus, $ as useTheme };

//# sourceMappingURL=index.js.map