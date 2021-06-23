
/** @public */
declare class ApiError extends ExternalError {
    /* Excluded from this release type: __constructor */
}

/* Excluded from this release type: AreaLinkedRect */

/**
 * Pops a content item out into a new browser window.
 * This is achieved by
 *
 *    - Creating a new configuration with the content item as root element
 *    - Serializing and minifying the configuration
 *    - Opening the current window's URL with the configuration as a GET parameter
 *    - GoldenLayout when opened in the new window will look for the GET parameter
 *      and use it instead of the provided configuration
 * @public
 */
declare class BrowserPopout extends EventEmitter {
    /* Excluded from this release type: _config */
    /* Excluded from this release type: _initialWindowSize */
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _popoutWindow */
    /* Excluded from this release type: _isInitialised */
    /* Excluded from this release type: _checkReadyInterval */
    /* Excluded from this release type: __constructor */
    toConfig(): ResolvedPopoutLayoutConfig;
    getGlInstance(): LayoutManager;
    /**
     * Retrieves the native BrowserWindow backing this popout.
     * Might throw an {@link (UnexpectedNullError:class)} exception when the window is not initialized yet.
     * @public
     */
    getWindow(): Window;
    close(): void;
    /**
     * Returns the popped out item to its original position. If the original
     * parent isn't available anymore it falls back to the layout's topmost element
     */
    popIn(): void;
    /* Excluded from this release type: createWindow */
    /* Excluded from this release type: checkReady */
    /* Excluded from this release type: serializeWindowFeatures */
    /* Excluded from this release type: createUrl */
    /* Excluded from this release type: positionWindow */
    /* Excluded from this release type: onInitialised */
    /* Excluded from this release type: _onClose */
}

/** @public */
declare class ComponentContainer extends EventEmitter {
    /* Excluded from this release type: _config */
    /* Excluded from this release type: _parent */
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _element */
    /* Excluded from this release type: _updateItemConfigEvent */
    /* Excluded from this release type: _showEvent */
    /* Excluded from this release type: _hideEvent */
    /* Excluded from this release type: _focusEvent */
    /* Excluded from this release type: _blurEvent */
    /* Excluded from this release type: _componentType */
    /* Excluded from this release type: _component */
    /* Excluded from this release type: _width */
    /* Excluded from this release type: _height */
    /* Excluded from this release type: _isClosable */
    /* Excluded from this release type: _initialState */
    /* Excluded from this release type: _state */
    /* Excluded from this release type: _isHidden */
    /* Excluded from this release type: _isShownWithZeroDimensions */
    /* Excluded from this release type: _tab */
    stateRequestEvent: ComponentContainer.StateRequestEventHandler | undefined;
    get width(): number | null;
    get height(): number | null;
    get parent(): ComponentItem;
    /* Excluded from this release type: componentName */
    get componentType(): JsonValue;
    get component(): ComponentItem.Component;
    get tab(): Tab;
    get title(): string;
    get layoutManager(): LayoutManager;
    get isHidden(): boolean;
    get state(): JsonValue | undefined;
    /** Return the initial component state */
    get initialState(): JsonValue | undefined;
    /** The inner DOM element where the container's content is intended to live in */
    get element(): HTMLElement;
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: destroy */
    /** @deprecated use {@link (ComponentContainer:class).element } */
    getElement(): HTMLElement;
    /**
     * Hides the container's component item (and hence, the container) if not already hidden.
     * Emits hide event prior to hiding the container.
     */
    hide(): void;
    /* Excluded from this release type: checkEmitHide */
    /**
     * Shows the container's component item (and hence, the container) if not visible.
     * Emits show event prior to hiding the container.
     */
    show(): void;
    /**
     * Focus this component in Layout.
     */
    focus(suppressEvent?: boolean): void;
    /**
     * Remove focus from this component in Layout.
     */
    blur(suppressEvent?: boolean): void;
    /* Excluded from this release type: checkEmitShow */
    /**
     * Set the size from within the container. Traverses up
     * the item tree until it finds a row or column element
     * and resizes its items accordingly.
     *
     * If this container isn't a descendant of a row or column
     * it returns false
     * @param width - The new width in pixel
     * @param height - The new height in pixel
     *
     * @returns resizeSuccesful
     */
    setSize(width: number, height: number): boolean;
    /**
     * Closes the container if it is closable. Can be called by
     * both the component within at as well as the contentItem containing
     * it. Emits a close event before the container itself is closed.
     */
    close(): void;
    /** Replaces component without affecting layout */
    replaceComponent(itemConfig: ComponentItemConfig): void;
    /**
     * Returns the initial component state or the latest passed in setState()
     * @returns state
     * @deprecated Use {@link (ComponentContainer:class).initialState}
     */
    getState(): JsonValue | undefined;
    /**
     * Merges the provided state into the current one
     * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
     */
    extendState(state: Record<string, unknown>): void;
    /**
     * Sets the component state
     * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
     */
    setState(state: JsonValue): void;
    /**
     * Set's the components title
     */
    setTitle(title: string): void;
    /* Excluded from this release type: setTab */
    /* Excluded from this release type: setDragSize */
    /* Excluded from this release type: setSizeToNodeSize */
    /* Excluded from this release type: releaseComponent */
}

/** @public */
declare namespace ComponentContainer {
    type StateRequestEventHandler = (this: void) => JsonValue | undefined;
    /* Excluded from this release type: ShowEventHandler */
    /* Excluded from this release type: HideEventHandler */
    /* Excluded from this release type: FocusEventHandler */
    /* Excluded from this release type: BlurEventHandler */
    /* Excluded from this release type: UpdateItemConfigEventHandler */
}

/** @public */
declare class ComponentItem extends ContentItem {
    /* Excluded from this release type: _parentItem */
    /* Excluded from this release type: _reorderEnabled */
    /* Excluded from this release type: _headerConfig */
    /* Excluded from this release type: _title */
    /* Excluded from this release type: _initialWantMaximise */
    /* Excluded from this release type: _container */
    /* Excluded from this release type: _tab */
    /* Excluded from this release type: _focused */
    /* Excluded from this release type: componentName */
    get componentType(): JsonValue;
    get reorderEnabled(): boolean;
    /* Excluded from this release type: initialWantMaximise */
    get component(): ComponentItem.Component;
    get container(): ComponentContainer;
    get parentItem(): ComponentParentableItem;
    get headerConfig(): ResolvedHeaderedItemConfig.Header | undefined;
    get title(): string;
    get tab(): Tab;
    get focused(): boolean;
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: destroy */
    applyUpdatableConfig(config: ResolvedComponentItemConfig): void;
    toConfig(): ResolvedComponentItemConfig;
    close(): void;
    /* Excluded from this release type: setDragSize */
    /* Excluded from this release type: updateSize */
    /* Excluded from this release type: init */
    /**
     * Set this component's title
     *
     * @public
     * @param title -
     */
    setTitle(title: string): void;
    setTab(tab: Tab): void;
    /* Excluded from this release type: hide */
    /* Excluded from this release type: show */
    /**
     * Focuses the item if it is not already focused
     */
    focus(suppressEvent?: boolean): void;
    /* Excluded from this release type: setFocused */
    /**
     * Blurs (defocuses) the item if it is focused
     */
    blur(suppressEvent?: boolean): void;
    /* Excluded from this release type: setBlurred */
    /* Excluded from this release type: setParent */
    /* Excluded from this release type: handleUpdateItemConfigEvent */
    /* Excluded from this release type: updateNodeSize */
}

/** @public */
declare namespace ComponentItem {
    type Component = unknown;
}

/** @public */
declare interface ComponentItemConfig extends HeaderedItemConfig {
    type: 'component';
    readonly content?: [];
    /**
     * The type of the component.
     * @deprecated use {@link (ComponentItemConfig:interface).componentType} instead
     */
    componentName?: string;
    /**
     * The type of the component.
     * `componentType` must be of type `string` if it is registered with any of the following functions:
     * * {@link (LayoutManager:class).registerComponent} (deprecated)
     * * {@link (LayoutManager:class).registerComponentConstructor}
     * * {@link (LayoutManager:class).registerComponentFactoryFunction}
     */
    componentType: JsonValue;
    /**
     * The state information with which a component will be initialised with.
     * Will be passed to the component constructor function and will be the value returned by
     * container.initialState.
     */
    componentState?: JsonValue;
    /**
     * Default: true
     */
    reorderEnabled?: boolean;
}

/** @public */
declare namespace ComponentItemConfig {
    function resolve(itemConfig: ComponentItemConfig): ResolvedComponentItemConfig;
    function componentTypeToTitle(componentType: JsonValue): string;
}

declare abstract class ComponentParentableItem extends ContentItem {
    /* Excluded from this release type: _focused */
    get focused(): boolean;
    /* Excluded from this release type: setFocusedValue */
    abstract setActiveComponentItem(item: ComponentItem, focus: boolean, suppressFocusEvent: boolean): void;
}

/** @public @deprecated - use {@link (LayoutConfig:interface)} */
declare type Config = LayoutConfig;

/** @public */
declare class ConfigurationError extends ExternalError {
    readonly node?: string | undefined;
    /* Excluded from this release type: __constructor */
}

/**
 * This is the baseclass that all content items inherit from.
 * Most methods provide a subset of what the sub-classes do.
 *
 * It also provides a number of functions for tree traversal
 * @public
 */
declare abstract class ContentItem extends EventEmitter {
    readonly layoutManager: LayoutManager;
    /* Excluded from this release type: _parent */
    /* Excluded from this release type: _element */
    /* Excluded from this release type: _type */
    /* Excluded from this release type: _id */
    /* Excluded from this release type: _popInParentIds */
    /* Excluded from this release type: _contentItems */
    /* Excluded from this release type: _isClosable */
    /* Excluded from this release type: _pendingEventPropagations */
    /* Excluded from this release type: _throttledEvents */
    /* Excluded from this release type: _isInitialised */
    /* Excluded from this release type: width */
    /* Excluded from this release type: minWidth */
    /* Excluded from this release type: height */
    /* Excluded from this release type: minHeight */
    isGround: boolean;
    isRow: boolean;
    isColumn: boolean;
    isStack: boolean;
    isComponent: boolean;
    get type(): ItemType;
    get id(): string;
    /* Excluded from this release type: popInParentIds */
    get parent(): ContentItem | null;
    get contentItems(): ContentItem[];
    get isClosable(): boolean;
    get element(): HTMLElement;
    get isInitialised(): boolean;
    static isStack(item: ContentItem): item is Stack;
    static isComponentItem(item: ContentItem): item is ComponentItem;
    static isComponentParentableItem(item: ContentItem): item is ComponentParentableItem;
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: updateSize */
    /**
     * Removes a child node (and its children) from the tree
     * @param contentItem - The child item to remove
     * @param keepChild - Whether to destroy the removed item
     */
    removeChild(contentItem: ContentItem, keepChild?: boolean): void;
    /**
     * Sets up the tree structure for the newly added child
     * The responsibility for the actual DOM manipulations lies
     * with the concrete item
     *
     * @param contentItem -
     * @param index - If omitted item will be appended
     * @param suspendResize - Used by descendent implementations
     */
    addChild(contentItem: ContentItem, index?: number | null, suspendResize?: boolean): number;
    /* Excluded from this release type: replaceChild */
    /**
     * Convenience method.
     * Shorthand for this.parent.removeChild( this )
     */
    remove(): void;
    /**
     * Removes the component from the layout and creates a new
     * browser window with the component and its children inside
     */
    popout(): BrowserPopout;
    abstract toConfig(): ResolvedItemConfig;
    /* Excluded from this release type: calculateConfigContent */
    /* Excluded from this release type: highlightDropZone */
    /* Excluded from this release type: onDrop */
    /* Excluded from this release type: show */
    /* Excluded from this release type: destroy */
    /* Excluded from this release type: getElementArea */
    /* Excluded from this release type: init */
    /* Excluded from this release type: setParent */
    /* Excluded from this release type: addPopInParentId */
    /* Excluded from this release type: initContentItems */
    /* Excluded from this release type: hide */
    /* Excluded from this release type: updateContentItemsSize */
    /* Excluded from this release type: createContentItems */
    /* Excluded from this release type: propagateEvent */
    tryBubbleEvent(name: string, args: unknown[]): void;
    /* Excluded from this release type: scheduleEventPropagationToLayoutManager */
    /* Excluded from this release type: propagateEventToLayoutManager */
}

/** @public */
declare namespace ContentItem {
    /* Excluded from this release type: Area */
}

/* Excluded from this release type: DragListener */

/**
 * Allows for any DOM item to create a component on drag
 * start to be dragged into the Layout
 * @public
 */
declare class DragSource {
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _element */
    /* Excluded from this release type: _extraAllowableChildTargets */
    /* Excluded from this release type: _componentTypeOrFtn */
    /* Excluded from this release type: _componentState */
    /* Excluded from this release type: _title */
    /* Excluded from this release type: _dragListener */
    /* Excluded from this release type: _dummyGroundContainer */
    /* Excluded from this release type: _dummyGroundContentItem */
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: destroy */
    /* Excluded from this release type: createDragListener */
    /* Excluded from this release type: onDragStart */
    /* Excluded from this release type: onDragStop */
    /* Excluded from this release type: removeDragListener */
}

/** @public */
declare namespace DragSource {
    interface ComponentItemConfig {
        type: JsonValue;
        state?: JsonValue;
        title?: string;
    }
}

/* Excluded from this release type: DropTargetIndicator */

/**
 * A generic and very fast EventEmitter implementation. On top of emitting the actual event it emits an
 * {@link (EventEmitter:namespace).ALL_EVENT} event for every event triggered. This allows to hook into it and proxy events forwards
 * @public
 */
declare class EventEmitter {
    /* Excluded from this release type: _allEventSubscriptions */
    /* Excluded from this release type: _subscriptionsMap */
    tryBubbleEvent(name: string, args: unknown[]): void;
    /**
     * Emit an event and notify listeners
     *
     * @param eventName - The name of the event
     * @param args - Additional arguments that will be passed to the listener
     */
    emit<K extends keyof EventEmitter.EventParamsMap>(eventName: K, ...args: EventEmitter.EventParamsMap[K]): void;
    /* Excluded from this release type: emitUnknown */
    emitBaseBubblingEvent<K extends keyof EventEmitter.EventParamsMap>(eventName: K): void;
    /* Excluded from this release type: emitUnknownBubblingEvent */
    /**
     * Removes a listener for an event.
     * @param eventName - The name of the event
     * @param callback - The previously registered callback method (optional)
     */
    removeEventListener<K extends keyof EventEmitter.EventParamsMap>(eventName: K, callback: EventEmitter.Callback<K>): void;
    off<K extends keyof EventEmitter.EventParamsMap>(eventName: K, callback: EventEmitter.Callback<K>): void;
    /**
     * Alias for off
     */
    unbind: <K extends keyof EventEmitter.EventParamsMap>(eventName: K, callback: EventEmitter.Callback<K>) => void;
    /**
     * Alias for emit
     */
    trigger: <K extends keyof EventEmitter.EventParamsMap>(eventName: K, ...args: EventEmitter.EventParamsMap[K]) => void;
    /**
     * Listen for events
     *
     * @param eventName - The name of the event to listen to
     * @param callback - The callback to execute when the event occurs
     */
    addEventListener<K extends keyof EventEmitter.EventParamsMap>(eventName: K, callback: EventEmitter.Callback<K>): void;
    on<K extends keyof EventEmitter.EventParamsMap>(eventName: K, callback: EventEmitter.Callback<K>): void;
    /* Excluded from this release type: addUnknownEventListener */
    /* Excluded from this release type: removeUnknownEventListener */
    /* Excluded from this release type: removeSubscription */
    /* Excluded from this release type: emitAllEvent */
}

/** @public */
declare namespace EventEmitter {
    /**
     * The name of the event that's triggered for every event
     */
    const ALL_EVENT = "__all";
    const headerClickEventName = "stackHeaderClick";
    const headerTouchStartEventName = "stackHeaderTouchStart";
    /* Excluded from this release type: UnknownCallback */
    type Callback<K extends keyof EventEmitter.EventParamsMap> = (this: void, ...args: EventParamsMap[K]) => void;
    interface EventParamsMap {
        "__all": UnknownParams;
        "activeContentItemChanged": ComponentItemParam;
        "close": NoParams;
        "closed": NoParams;
        "destroy": NoParams;
        "drag": DragParams;
        "dragStart": DragStartParams;
        "dragStop": DragStopParams;
        "hide": NoParams;
        "initialised": NoParams;
        "itemDropped": ComponentItemParam;
        "maximised": NoParams;
        "minimised": NoParams;
        "open": NoParams;
        "popIn": NoParams;
        "resize": NoParams;
        "show": NoParams;
        /** @deprecated - use show instead */
        "shown": NoParams;
        "stateChanged": NoParams;
        "tab": TabParam;
        "tabCreated": TabParam;
        "titleChanged": StringParam;
        "windowClosed": PopoutParam;
        "windowOpened": PopoutParam;
        "beforeComponentRelease": BeforeComponentReleaseParams;
        "beforeItemDestroyed": BubblingEventParam;
        "itemCreated": BubblingEventParam;
        "itemDestroyed": BubblingEventParam;
        "focus": BubblingEventParam;
        "blur": BubblingEventParam;
        "stackHeaderClick": ClickBubblingEventParam;
        "stackHeaderTouchStart": TouchStartBubblingEventParam;
        "userBroadcast": UnknownParams;
    }
    type UnknownParams = unknown[];
    type NoParams = [];
    type UnknownParam = [unknown];
    type PopoutParam = [BrowserPopout];
    type ComponentItemParam = [ComponentItem];
    type TabParam = [Tab];
    type BubblingEventParam = [EventEmitter.BubblingEvent];
    type StringParam = [string];
    type DragStartParams = [originalX: number, originalY: number];
    type DragStopParams = [event: PointerEvent | undefined];
    type DragParams = [offsetX: number, offsetY: number, event: PointerEvent];
    type BeforeComponentReleaseParams = [component: unknown];
    type ClickBubblingEventParam = [ClickBubblingEvent];
    type TouchStartBubblingEventParam = [TouchStartBubblingEvent];
    class BubblingEvent {
        /* Excluded from this release type: _name */
        /* Excluded from this release type: _target */
        /* Excluded from this release type: _isPropagationStopped */
        get name(): string;
        get target(): EventEmitter;
        /** @deprecated Use {@link (EventEmitter:namespace).(BubblingEvent:class).target} instead */
        get origin(): EventEmitter;
        get isPropagationStopped(): boolean;
        /* Excluded from this release type: __constructor */
        stopPropagation(): void;
    }
    class ClickBubblingEvent extends BubblingEvent {
        /* Excluded from this release type: _mouseEvent */
        get mouseEvent(): MouseEvent;
        /* Excluded from this release type: __constructor */
    }
    class TouchStartBubblingEvent extends BubblingEvent {
        /* Excluded from this release type: _touchEvent */
        get touchEvent(): TouchEvent;
        /* Excluded from this release type: __constructor */
    }
}

/**
 * An EventEmitter singleton that propagates events
 * across multiple windows. This is a little bit trickier since
 * windows are allowed to open childWindows in their own right.
 *
 * This means that we deal with a tree of windows. Therefore, we do the event propagation in two phases:
 *
 * - Propagate events from this layout to the parent layout
 *   - Repeat until the event arrived at the root layout
 * - Propagate events to this layout and to all children
 *   - Repeat until all layouts got the event
 *
 * **WARNING**: Only userBroadcast events are propagated between windows.
 * This means the you have to take care of propagating state changes between windows yourself.
 *
 * @public
 */
declare class EventHub extends EventEmitter {
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _childEventListener */
    /* Excluded from this release type: __constructor */
    /**
     * Emit an event and notify listeners
     *
     * @param eventName - The name of the event
     * @param args - Additional arguments that will be passed to the listener
     * @public
     */
    emit<K extends keyof EventEmitter.EventParamsMap>(eventName: K, ...args: EventEmitter.EventParamsMap[K]): void;
    /**
     * Broadcasts a message to all other currently opened windows.
     * @public
     */
    emitUserBroadcast(...args: EventEmitter.UnknownParams): void;
    /* Excluded from this release type: destroy */
    /* Excluded from this release type: handleUserBroadcastEvent */
    /* Excluded from this release type: onEventFromChild */
    /* Excluded from this release type: propagateToParent */
    /* Excluded from this release type: propagateToThisAndSubtree */
}

/** @public */
declare namespace EventHub {
    /* Excluded from this release type: ChildEventName */
    /* Excluded from this release type: ChildEventDetail */
    /* Excluded from this release type: ChildEventInit */
}

/** @public */
declare abstract class ExternalError extends Error {
    readonly type: string;
    /* Excluded from this release type: __constructor */
}

/** @public */
declare class GoldenLayout extends LayoutManager {
    /* Excluded from this release type: _subWindowsCreated */
    /* Excluded from this release type: _creationTimeoutPassed */
    /**
    * @param container - A Dom HTML element. Defaults to body
    */
    constructor(container?: HTMLElement);
    /** @deprecated specify layoutConfig in {@link (LayoutManager:class).loadLayout} */
    constructor(config: LayoutConfig, container?: HTMLElement);
    /**
     * Creates the actual layout. Must be called after all initial components
     * are registered. Recurses through the configuration and sets up
     * the item tree.
     *
     * If called before the document is ready it adds itself as a listener
     * to the document.ready event
     * @deprecated LayoutConfig should not be loaded in {@link (LayoutManager:class)} constructor, but rather in a
     * {@link (LayoutManager:class).loadLayout} call.  If LayoutConfig is not specified in {@link (LayoutManager:class)} constructor,
     * then init() will be automatically called internally and should not be called externally.
     */
    init(): void;
    /* Excluded from this release type: createSubWindows */
    /* Excluded from this release type: adjustToWindowMode */
}

/** @public */
declare namespace GoldenLayout {
    /* Excluded from this release type: createConfig */
}

/* Excluded from this release type: GroundItem */

/**
 * This class represents a header above a Stack ContentItem.
 * @public
 */
declare class Header extends EventEmitter {
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _parent */
    /* Excluded from this release type: _configClosable */
    /* Excluded from this release type: _getActiveComponentItemEvent */
    /* Excluded from this release type: _popoutEvent */
    /* Excluded from this release type: _maximiseToggleEvent */
    /* Excluded from this release type: _clickEvent */
    /* Excluded from this release type: _touchStartEvent */
    /* Excluded from this release type: _componentRemoveEvent */
    /* Excluded from this release type: _componentFocusEvent */
    /* Excluded from this release type: _componentDragStartEvent */
    /* Excluded from this release type: _tabsContainer */
    /* Excluded from this release type: _element */
    /* Excluded from this release type: _controlsContainerElement */
    /* Excluded from this release type: _show */
    /* Excluded from this release type: _popoutEnabled */
    /* Excluded from this release type: _popoutLabel */
    /* Excluded from this release type: _maximiseEnabled */
    /* Excluded from this release type: _maximiseLabel */
    /* Excluded from this release type: _minimiseEnabled */
    /* Excluded from this release type: _minimiseLabel */
    /* Excluded from this release type: _closeEnabled */
    /* Excluded from this release type: _closeLabel */
    /* Excluded from this release type: _tabDropdownEnabled */
    /* Excluded from this release type: _tabDropdownLabel */
    /* Excluded from this release type: _tabControlOffset */
    /* Excluded from this release type: _clickListener */
    /* Excluded from this release type: _touchStartListener */
    /* Excluded from this release type: _documentMouseUpListener */
    /* Excluded from this release type: _rowColumnClosable */
    /* Excluded from this release type: _canRemoveComponent */
    /* Excluded from this release type: _side */
    /* Excluded from this release type: _leftRightSided */
    /* Excluded from this release type: _closeButton */
    /* Excluded from this release type: _popoutButton */
    /* Excluded from this release type: _tabDropdownButton */
    /* Excluded from this release type: _maximiseButton */
    /* Excluded from this release type: show */
    /* Excluded from this release type: side */
    /* Excluded from this release type: leftRightSided */
    get layoutManager(): LayoutManager;
    get parent(): Stack;
    get tabs(): Tab[];
    get lastVisibleTabIndex(): number;
    /**
     * @deprecated use {@link (Stack:class).getActiveComponentItem} */
    get activeContentItem(): ContentItem | null;
    get element(): HTMLElement;
    /** @deprecated use {@link (Header:class).tabsContainerElement} */
    get tabsContainer(): HTMLElement;
    get tabsContainerElement(): HTMLElement;
    get controlsContainerElement(): HTMLElement;
    /** @deprecated use {@link (Header:class).controlsContainerElement} */
    get controlsContainer(): HTMLElement;
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: destroy */
    /* Excluded from this release type: createTab */
    /* Excluded from this release type: removeTab */
    /* Excluded from this release type: processActiveComponentChanged */
    /* Excluded from this release type: setSide */
    /* Excluded from this release type: setRowColumnClosable */
    /* Excluded from this release type: updateClosability */
    /* Excluded from this release type: applyFocusedValue */
    /* Excluded from this release type: processMaximised */
    /* Excluded from this release type: processMinimised */
    /* Excluded from this release type: updateTabSizes */
    /* Excluded from this release type: handleTabInitiatedComponentRemoveEvent */
    /* Excluded from this release type: handleTabInitiatedComponentFocusEvent */
    /* Excluded from this release type: handleTabInitiatedDragStartEvent */
    /* Excluded from this release type: processTabDropdownActiveChanged */
    /* Excluded from this release type: handleButtonPopoutEvent */
    /* Excluded from this release type: handleButtonMaximiseToggleEvent */
    /* Excluded from this release type: onClick */
    /* Excluded from this release type: onTouchStart */
    /* Excluded from this release type: notifyClick */
    /* Excluded from this release type: notifyTouchStart */
}

/** @public */
declare namespace Header {
    /* Excluded from this release type: GetActiveComponentItemEvent */
    /* Excluded from this release type: CloseEvent */
    /* Excluded from this release type: PopoutEvent */
    /* Excluded from this release type: MaximiseToggleEvent */
    /* Excluded from this release type: ClickEvent */
    /* Excluded from this release type: TouchStartEvent */
    /* Excluded from this release type: ComponentRemoveEvent */
    /* Excluded from this release type: ComponentFocusEvent */
    /* Excluded from this release type: ComponentDragStartEvent */
    /* Excluded from this release type: StateChangedEvent */
    /* Excluded from this release type: Settings */
}

/** @public */
declare interface HeaderedItemConfig extends ItemConfig {
    /** @deprecated use {@link (HeaderedItemConfig:namespace).(Header:interface).show} instead */
    hasHeaders?: boolean;
    header?: HeaderedItemConfig.Header;
    maximised?: boolean;
}

/** @public */
declare namespace HeaderedItemConfig {
    interface Header {
        show?: false | Side;
        popout?: false | string;
        dock?: false | string;
        maximise?: false | string;
        close?: string;
        minimise?: string;
        tabDropdown?: false | string;
    }
    namespace Header {
        function resolve(header: Header | undefined, hasHeaders: boolean | undefined): ResolvedHeaderedItemConfig.Header | undefined;
    }
    function resolveIdAndMaximised(config: HeaderedItemConfig): {
        id: string;
        maximised: boolean;
    };
}

/** @public */
declare const enum I18nStringId {
    PopoutCannotBeCreatedWithGroundItemConfig = 0,
    PleaseRegisterAConstructorFunction = 1,
    ComponentIsAlreadyRegistered = 2,
    ItemConfigIsNotTypeComponent = 3
}

/** @public */
declare namespace I18nStrings {
    const idCount: number;
    function checkInitialise(): void;
}

/** @public */
declare const i18nStrings: string[];

/** @public */
declare interface ItemConfig {
    /**
     * The type of the item. Possible values are 'row', 'column', 'stack', 'component'.
     */
    type: ItemType;
    /**
     * An array of configurations for items that will be created as children of this item.
     */
    content?: ItemConfig[];
    /**
     * The width of this item, relative to the other children of its parent in percent
     */
    width?: number;
    /**
     * The minimum width of this item in pixels
     * CAUTION - Not tested - do not use
     */
    minWidth?: number;
    /**
     * The height of this item, relative to the other children of its parent in percent
     */
    height?: number;
    /**
     * The minimum height of this item in pixels
     * CAUTION - Not tested - do not use
     */
    minHeight?: number;
    /**
     * A string that can be used to identify a ContentItem.
     * Do NOT assign an array.  This only exists for legacy purposes.  If an array is assigned, the first element
     * will become the id.
     */
    id?: string;
    /**
     * Determines if the item is closable. If false, the x on the items tab will be hidden and container.close()
     * will return false
     * Default: true
     */
    isClosable?: boolean;
    /**
     * The title of the item as displayed on its tab and on popout windows
     * Default: componentType.toString() or ''
     */
    title?: string;
}

/** @public */
declare namespace ItemConfig {
    function resolve(itemConfig: ItemConfig): ResolvedItemConfig;
    function resolveContent(content: ItemConfig[] | undefined): ResolvedItemConfig[];
    function resolveId(id: string | string[] | undefined): string;
    function isGround(config: ItemConfig): config is ItemConfig;
    function isRow(config: ItemConfig): config is ItemConfig;
    function isColumn(config: ItemConfig): config is ItemConfig;
    function isStack(config: ItemConfig): config is ItemConfig;
    function isComponent(config: ItemConfig): config is ComponentItemConfig;
}

/** @public */
declare type ItemType = 'ground' | 'row' | 'column' | 'stack' | 'component';

/** @public */
declare namespace ItemType {
    const ground = "ground";
    const row = "row";
    const column = "column";
    const stack = "stack";
    const component = "component";
}

/** @public */
declare interface Json {
    [name: string]: JsonValue;
}

/** @public */
declare type JsonValue = string | number | boolean | null | Json | object | JsonValueArray;

/** @public */
declare namespace JsonValue {
    function isJson(value: JsonValue): value is Json;
    function isJsonObject(value: JsonValue): value is Json | object;
}

/** @public */
declare type JsonValueArray = Array<JsonValue>;

/** @public */
declare interface LayoutConfig {
    root: RootItemConfig;
    /** @deprecated Use {@link (LayoutConfig:interface).root} */
    content?: (RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig)[];
    openPopouts?: PopoutLayoutConfig[];
    dimensions?: LayoutConfig.Dimensions;
    settings?: LayoutConfig.Settings;
    /** @deprecated use {@link (LayoutConfig:interface).header} instead */
    labels?: LayoutConfig.Labels;
    header?: LayoutConfig.Header;
}

/** Use to specify LayoutConfig with defaults or deserialise a LayoutConfig.
 * Deserialisation will handle backwards compatibility.
 * Note that LayoutConfig should be used for serialisation (not LayoutConfig)
 * @public
 */
declare namespace LayoutConfig {
    interface Settings {
        /**
         * @deprecated use ${@link (LayoutConfig:namespace).(Header:interface).show} instead
         */
        hasHeaders?: boolean;
        /**
         * Constrains the area in which items can be dragged to the layout's container. Will be set to false
         * automatically when layout.createDragSource() is called.
         * Default: true
         */
        constrainDragToContainer?: boolean;
        /**
         * If true, the user can re-arrange the layout by dragging items by their tabs to the desired location.
         * Can be overridden by ItemConfig.reorderEnabled for specific ItemConfigs
         * Default: true
         */
        reorderEnabled?: boolean;
        /**
         * Decides what will be opened in a new window if the user clicks the popout icon. If true the entire stack will
         * be transferred to the new window, if false only the active component will be opened.
         * Default: false
         */
        popoutWholeStack?: boolean;
        /**
         * Specifies if an error is thrown when a popout is blocked by the browser (e.g. by opening it programmatically).
         * If false, the popout call will fail silently.
         * Default: true
         */
        blockedPopoutsThrowError?: boolean;
        /**
         * Specifies if all popouts should be closed when the page that created them is closed. Popouts don't have a
         * strong dependency on their parent and can exist on their own, but can be quite annoying to close by hand. In
         * addition, any changes made to popouts won't be stored after the parent is closed.
         * Default: true
         */
        closePopoutsOnUnload?: boolean;
        /**
         * Specifies if the popout icon should be displayed in the header-bar.
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).popout} instead
         */
        showPopoutIcon?: boolean;
        /**
         * Specifies if the maximise icon should be displayed in the header-bar.
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).maximise} instead
         */
        showMaximiseIcon?: boolean;
        /**
         * Specifies if the close icon should be displayed in the header-bar.
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).close} instead
         */
        showCloseIcon?: boolean;
        /**
         * Specifies Responsive Mode (more info needed).
         * Default: none
         */
        responsiveMode?: ResponsiveMode;
        /**
         * Specifies Maximum pixel overlap per tab.
         * Default: 0
         */
        tabOverlapAllowance?: number;
        /**
         *
         * Default: true
         */
        reorderOnTabMenuClick?: boolean;
        /**
         * Default: 10
         */
        tabControlOffset?: number;
        /**
         * Specifies whether to pop in elements when closing a popout window.
         * Default: false
         */
        popInOnClose?: boolean;
    }
    namespace Settings {
        function resolve(settings: Settings | undefined): ResolvedLayoutConfig.Settings;
    }
    interface Dimensions {
        /**
         * The width of the borders between the layout items in pixel. Please note: The actual draggable area is wider
         * than the visible one, making it safe to set this to small values without affecting usability.
         * Default: 5
         */
        borderWidth?: number;
        /**
         * Default: 15
         */
        borderGrabWidth?: number;
        /**
         * The minimum height an item can be resized to (in pixel).
         * Default: 10
         */
        minItemHeight?: number;
        /**
         * The minimum width an item can be resized to (in pixel).
         * Default: 10
         */
        minItemWidth?: number;
        /**
         * The height of the header elements in pixel. This can be changed, but your theme's header css needs to be
         * adjusted accordingly.
         * Default: 20
         */
        headerHeight?: number;
        /**
         * The width of the element that appears when an item is dragged (in pixel).
         * Default: 300
         */
        dragProxyWidth?: number;
        /**
         * The height of the element that appears when an item is dragged (in pixel).
         * Default: 200
         */
        dragProxyHeight?: number;
    }
    namespace Dimensions {
        function resolve(dimensions: Dimensions | undefined): ResolvedLayoutConfig.Dimensions;
    }
    interface Labels {
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).close} instead
         */
        close?: string;
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).maximise} instead
         */
        maximise?: string;
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).minimise} instead
         */
        minimise?: string;
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).popin} instead
         */
        popin?: string;
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).popout} instead
         */
        popout?: string;
        /**
         * @deprecated use {@link (LayoutConfig:namespace).(Header:interface).tabDropdown} instead
         */
        tabDropdown?: string;
    }
    interface Header {
        /**
         * Specifies whether header should be displayed, and if so, on which side.
         * If false, the layout will be displayed with splitters only.
         * Default: 'top'
         */
        show?: false | Side;
        /**
         * The tooltip text that appears when hovering over the popout icon or false if popout button not displayed.
         * Default: 'open in new window'
         */
        popout?: false | string;
        /**
         * The tooltip text that appears when hovering over the popin icon.
         * Default: 'pop in'
         */
        popin?: string;
        /**
         * The tooltip text that appears when hovering over the maximise icon or false if maximised button not displayed.
         * Default: 'maximise'
         */
        maximise?: false | string;
        /**
         * The tooltip text that appears when hovering over the close icon.
         * Default: 'close'
         */
        close?: false | string;
        /**
         * The tooltip text that appears when hovering over the minimise icon.
         * Default: 'minimise'
         */
        minimise?: string;
        /**
         *
         * Default: 'additional tabs'
         */
        tabDropdown?: string;
    }
    namespace Header {
        function resolve(header: Header | undefined, settings: LayoutConfig.Settings | undefined, labels: LayoutConfig.Labels | undefined): ResolvedLayoutConfig.Header;
    }
    function isPopout(config: LayoutConfig): config is PopoutLayoutConfig;
    function resolve(layoutConfig: LayoutConfig): ResolvedLayoutConfig;
    function fromResolved(config: ResolvedLayoutConfig): LayoutConfig;
    function isResolved(configOrResolvedConfig: ResolvedLayoutConfig | LayoutConfig): configOrResolvedConfig is ResolvedLayoutConfig;
    function resolveOpenPopouts(popoutConfigs: PopoutLayoutConfig[] | undefined): ResolvedPopoutLayoutConfig[];
}

/**
 * The main class that will be exposed as GoldenLayout.
 */
/** @public */
declare abstract class LayoutManager extends EventEmitter {
    /* Excluded from this release type: _containerElement */
    /* Excluded from this release type: _isFullPage */
    /* Excluded from this release type: _isInitialised */
    /* Excluded from this release type: _groundItem */
    /* Excluded from this release type: _openPopouts */
    /* Excluded from this release type: _dropTargetIndicator */
    /* Excluded from this release type: _transitionIndicator */
    /* Excluded from this release type: _resizeTimeoutId */
    /* Excluded from this release type: _componentTypes */
    /* Excluded from this release type: _itemAreas */
    /* Excluded from this release type: _maximisedStack */
    /* Excluded from this release type: _maximisePlaceholder */
    /* Excluded from this release type: _tabDropPlaceholder */
    /* Excluded from this release type: _dragSources */
    /* Excluded from this release type: _updatingColumnsResponsive */
    /* Excluded from this release type: _firstLoad */
    /* Excluded from this release type: _eventHub */
    /* Excluded from this release type: _width */
    /* Excluded from this release type: _height */
    /* Excluded from this release type: _focusedComponentItem */
    /* Excluded from this release type: _getComponentConstructorFtn */
    /* Excluded from this release type: _windowResizeListener */
    /* Excluded from this release type: _windowUnloadListener */
    /* Excluded from this release type: _maximisedStackBeforeDestroyedListener */
    readonly isSubWindow: boolean;
    layoutConfig: ResolvedLayoutConfig;
    /**
     * If a new component is required and:
     * 1. a component type with corresponding name is not registered, and
     * 2. a
     * This callback should return a constructor for a component based on a config.
     * This function will be called if a component type with the required name is not already registered.
     * It is recommended that applications use the {@link (LayoutManager:class).getComponentEvent} and
     * {@link (LayoutManager:class).releaseComponentEvent} instead of registering a constructor callback
     */
    getComponentEvent: LayoutManager.GetComponentEventHandler | undefined;
    releaseComponentEvent: LayoutManager.ReleaseComponentEventHandler | undefined;
    get container(): HTMLElement;
    get isInitialised(): boolean;
    /* Excluded from this release type: groundItem */
    /* Excluded from this release type: root */
    get openPopouts(): BrowserPopout[];
    /* Excluded from this release type: dropTargetIndicator */
    /* Excluded from this release type: transitionIndicator */
    get width(): number | null;
    get height(): number | null;
    /**
     * Retrieves the {@link (EventHub:class)} instance associated with this layout manager.
     * This can be used to propagate events between the windows
     * @public
     */
    get eventHub(): EventHub;
    get rootItem(): ContentItem | undefined;
    get focusedComponentItem(): ComponentItem | undefined;
    /* Excluded from this release type: tabDropPlaceholder */
    get maximisedStack(): Stack | undefined;
    /* Excluded from this release type: __constructor */
    /**
     * Destroys the LayoutManager instance itself as well as every ContentItem
     * within it. After this is called nothing should be left of the LayoutManager.
     */
    destroy(): void;
    /**
     * Takes a GoldenLayout configuration object and
     * replaces its keys and values recursively with
     * one letter codes
     * @deprecated use {@link (ResolvedLayoutConfig:namespace).minifyConfig} instead
     */
    minifyConfig(config: ResolvedLayoutConfig): ResolvedLayoutConfig;
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     * @deprecated use {@link (ResolvedLayoutConfig:namespace).unminifyConfig} instead
     */
    unminifyConfig(config: ResolvedLayoutConfig): ResolvedLayoutConfig;
    /**
     * Register a new component type with the layout manager.
     *
     * @deprecated See {@link https://stackoverflow.com/questions/40922531/how-to-check-if-a-javascript-function-is-a-constructor}
     * instead use {@link (LayoutManager:class).registerComponentConstructor}
     * or {@link (LayoutManager:class).registerComponentFactoryFunction}
     */
    registerComponent(name: string, componentConstructorOrFactoryFtn: LayoutManager.ComponentConstructor | LayoutManager.ComponentFactoryFunction): void;
    /**
     * Register a new component type with the layout manager.
     */
    registerComponentConstructor(typeName: string, componentConstructor: LayoutManager.ComponentConstructor): void;
    /**
     * Register a new component with the layout manager.
     */
    registerComponentFactoryFunction(typeName: string, componentFactoryFunction: LayoutManager.ComponentFactoryFunction): void;
    /**
     * Register a component function with the layout manager. This function should
     * return a constructor for a component based on a config.
     * This function will be called if a component type with the required name is not already registered.
     * It is recommended that applications use the {@link (LayoutManager:class).getComponentEvent} and
     * {@link (LayoutManager:class).releaseComponentEvent} instead of registering a constructor callback
     * @deprecated use {@link (LayoutManager:class).registerGetComponentConstructorCallback}
     */
    registerComponentFunction(callback: LayoutManager.GetComponentConstructorCallback): void;
    /**
     * Register a callback closure with the layout manager which supplies a Component Constructor.
     * This callback should return a constructor for a component based on a config.
     * This function will be called if a component type with the required name is not already registered.
     * It is recommended that applications use the {@link (LayoutManager:class).getComponentEvent} and
     * {@link (LayoutManager:class).releaseComponentEvent} instead of registering a constructor callback
     */
    registerGetComponentConstructorCallback(callback: LayoutManager.GetComponentConstructorCallback): void;
    getRegisteredComponentTypeNames(): string[];
    /**
     * Returns a previously registered component instantiator.  Attempts to utilize registered
     * component type by first, then falls back to the component constructor callback function (if registered).
     * If neither gets an instantiator, then returns `undefined`.
     * Note that `undefined` will return if config.componentType is not a string
     *
     * @param config - The item config
     * @public
     */
    getComponentInstantiator(config: ResolvedComponentItemConfig): LayoutManager.ComponentInstantiator | undefined;
    /* Excluded from this release type: getComponent */
    /* Excluded from this release type: releaseComponent */
    /* Excluded from this release type: init */
    /**
     * Loads a new layout
     * @param layoutConfig - New layout to be loaded
     */
    loadLayout(layoutConfig: LayoutConfig): void;
    /**
     * Creates a layout configuration object based on the the current state
     *
     * @public
     * @returns GoldenLayout configuration
     */
    saveLayout(): ResolvedLayoutConfig;
    /**
     * @deprecated Use {@link (LayoutManager:class).saveLayout}
     */
    toConfig(): ResolvedLayoutConfig;
    /**
     * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param componentTypeName - Name of component type to be created.
     * @param state - Optional initial state to be assigned to component
     * @returns New ComponentItem created.
     */
    newComponent(componentType: JsonValue, componentState?: JsonValue, title?: string): ComponentItem;
    /**
     * Adds a ComponentItem at the first valid selector location.
     * @param componentTypeName - Name of component type to be created.
     * @param state - Optional initial state to be assigned to component
     * @param locationSelectors - Array of location selectors used to find location in layout where component
     * will be added. First location in array which is valid will be used. If locationSelectors is undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used
     * @returns New ComponentItem created or undefined if no valid location selector was in array.
     */
    newComponentAtLocation(componentType: JsonValue, componentState?: JsonValue, title?: string, locationSelectors?: LayoutManager.LocationSelector[]): ComponentItem | undefined;
    /**
     * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param componentType - Type of component to be created.
     * @param state - Optional initial state to be assigned to component
     * @returns Location of new ComponentItem created.
     */
    addComponent(componentType: JsonValue, componentState?: JsonValue, title?: string): LayoutManager.Location;
    /**
     * Adds a ComponentItem at the first valid selector location.
     * @param componentType - Type of component to be created.
     * @param state - Optional initial state to be assigned to component
     * @param locationSelectors - Array of location selectors used to find determine location in layout where component
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns Location of new ComponentItem created or undefined if no valid location selector was in array.
     */
    addComponentAtLocation(componentType: JsonValue, componentState?: JsonValue, title?: string, locationSelectors?: readonly LayoutManager.LocationSelector[]): LayoutManager.Location | undefined;
    /**
     * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @returns New ContentItem created.
    */
    newItem(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig): ContentItem;
    /**
     * Adds a new child ContentItem under the root ContentItem.  If a root does not exist, then create root ContentItem instead
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns New ContentItem created or undefined if no valid location selector was in array. */
    newItemAtLocation(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig, locationSelectors?: readonly LayoutManager.LocationSelector[]): ContentItem | undefined;
    /**
     * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added.
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @returns Location of new ContentItem created. */
    addItem(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig): LayoutManager.Location;
    /**
     * Adds a ContentItem at the first valid selector location.
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns Location of new ContentItem created or undefined if no valid location selector was in array. */
    addItemAtLocation(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig, locationSelectors?: readonly LayoutManager.LocationSelector[]): LayoutManager.Location | undefined;
    /** Loads the specified component ResolvedItemConfig as root.
     * This can be used to display a Component all by itself.  The layout cannot be changed other than having another new layout loaded.
     * Note that, if this layout is saved and reloaded, it will reload with the Component as a child of a Stack.
    */
    loadComponentAsRoot(itemConfig: ComponentItemConfig): void;
    /** @deprecated Use {@link (LayoutManager:class).setSize} */
    updateSize(width: number, height: number): void;
    /**
     * Updates the layout managers size
     *
     * @param width - Width in pixels
     * @param height - Height in pixels
     */
    setSize(width: number, height: number): void;
    /* Excluded from this release type: updateSizeFromContainer */
    /**
     * Update the size of the root ContentItem.  This will update the size of all contentItems in the tree
     */
    updateRootSize(): void;
    /** @public */
    createAndInitContentItem(config: ResolvedItemConfig, parent: ContentItem): ContentItem;
    /* Excluded from this release type: createContentItem */
    findFirstComponentItemById(id: string): ComponentItem | undefined;
    /**
     * Creates a popout window with the specified content at the specified position
     *
     * @param itemConfigOrContentItem - The content of the popout window's layout manager derived from either
     * a {@link (ContentItem:class)} or {@link (ItemConfig:interface)} or ResolvedItemConfig content (array of {@link (ItemConfig:interface)})
     * @param positionAndSize - The width, height, left and top of Popout window
     * @param parentId -The id of the element this item will be appended to when popIn is called
     * @param indexInParent - The position of this item within its parent element
     */
    createPopout(itemConfigOrContentItem: ContentItem | ResolvedRootItemConfig, positionAndSize: ResolvedPopoutLayoutConfig.Window, parentId: string | null, indexInParent: number | null): BrowserPopout;
    /* Excluded from this release type: createPopoutFromContentItem */
    /* Excluded from this release type: createPopoutFromItemConfig */
    /* Excluded from this release type: createPopoutFromPopoutLayoutConfig */
    /**
     * Attaches DragListener to any given DOM element
     * and turns it into a way of creating new ComponentItems
     * by 'dragging' the DOM element into the layout
     *
     * @param element -
     * @param componentTypeOrFtn - Type of component to be created, or a function which will provide both component type and state
     * @param componentState - Optional initial state of component.  This will be ignored if componentTypeOrFtn is a function
     *
     * @returns an opaque object that identifies the DOM element
     *          and the attached itemConfig. This can be used in
     *          removeDragSource() later to get rid of the drag listeners.
     */
    newDragSource(element: HTMLElement, componentTypeOrFtn: JsonValue | (() => DragSource.ComponentItemConfig), componentState?: JsonValue, title?: string): DragSource;
    /**
     * Removes a DragListener added by createDragSource() so the corresponding
     * DOM element is not a drag source any more.
     */
    removeDragSource(dragSource: DragSource): void;
    /* Excluded from this release type: startComponentDrag */
    /**
     * Programmatically focuses an item. This focuses the specified component item
     * and the item emits a focus event
     *
     * @param item - The component item to be focused
     * @param suppressEvent - Whether to emit focus event
     */
    focusComponent(item: ComponentItem, suppressEvent?: boolean): void;
    /**
     * Programmatically blurs (defocuses) the currently focused component.
     * If a component item is focused, then it is blurred and and the item emits a blur event
     *
     * @param item - The component item to be blurred
     * @param suppressEvent - Whether to emit blur event
     */
    clearComponentFocus(suppressEvent?: boolean): void;
    /* Excluded from this release type: setFocusedComponentItem */
    /* Excluded from this release type: createContentItemFromConfig */
    /* Excluded from this release type: setMaximisedStack */
    checkMinimiseMaximisedStack(): void;
    /* Excluded from this release type: cleanupBeforeMaximisedStackDestroyed */
    /* Excluded from this release type: closeWindow */
    /* Excluded from this release type: getArea */
    /* Excluded from this release type: calculateItemAreas */
    /* Excluded from this release type: checkLoadedLayoutMaximiseItem */
    /* Excluded from this release type: processMaximiseStack */
    /* Excluded from this release type: processMinimiseMaximisedStack */
    /* Excluded from this release type: reconcilePopoutWindows */
    /* Excluded from this release type: getAllContentItems */
    /* Excluded from this release type: bindEvents */
    /* Excluded from this release type: processResizeWithDebounce */
    /* Excluded from this release type: setContainer */
    /* Excluded from this release type: onUnload */
    /* Excluded from this release type: adjustColumnsResponsive */
    /* Excluded from this release type: useResponsiveLayout */
    /* Excluded from this release type: addChildContentItemsToContainer */
    /* Excluded from this release type: getAllStacks */
    /* Excluded from this release type: findFirstContentItemType */
    /* Excluded from this release type: findFirstContentItemTypeRecursive */
    /* Excluded from this release type: findFirstContentItemTypeByIdRecursive */
    /* Excluded from this release type: findAllStacksRecursive */
    /* Excluded from this release type: findFirstLocation */
    /* Excluded from this release type: findLocation */
    /* Excluded from this release type: tryCreateLocationFromParentItem */
}

/** @public */
declare namespace LayoutManager {
    type ComponentConstructor = new (container: ComponentContainer, state: JsonValue | undefined) => ComponentItem.Component;
    type ComponentFactoryFunction = (container: ComponentContainer, state: JsonValue | undefined) => ComponentItem.Component;
    type GetComponentConstructorCallback = (this: void, config: ResolvedComponentItemConfig) => ComponentConstructor;
    type GetComponentEventHandler = (this: void, container: ComponentContainer, itemConfig: ResolvedComponentItemConfig) => ComponentItem.Component;
    type ReleaseComponentEventHandler = (this: void, container: ComponentContainer, component: ComponentItem.Component) => void;
    /* Excluded from this release type: ConstructorParameters */
    function createMaximisePlaceElement(document: Document): HTMLElement;
    function createTabDropPlaceholderElement(document: Document): HTMLElement;
    /** @public */
    interface ComponentInstantiator {
        constructor: ComponentConstructor | undefined;
        factoryFunction: ComponentFactoryFunction | undefined;
    }
    /**
     * Specifies a location of a ContentItem without referencing the content item.
     * Used to specify where a new item is to be added
     * @public
     */
    interface Location {
        parentItem: ContentItem;
        index: number;
    }
    /**
     * A selector used to specify a unique location in the layout
     * @public
     */
    interface LocationSelector {
        /** Specifies selector algorithm */
        typeId: LocationSelector.TypeId;
        /** Used by algorithm to determine index in found ContentItem */
        index?: number;
    }
    /** @public */
    namespace LocationSelector {
        const enum TypeId {
            /** Stack with focused Item. Index specifies offset from index of focused item (eg 1 is the position after focused item) */
            FocusedItem = 0,
            /** Stack with focused Item. Index specfies ContentItems index */
            FocusedStack = 1,
            /** First stack found in layout */
            FirstStack = 2,
            /** First Row or Column found in layout (rows are searched first) */
            FirstRowOrColumn = 3,
            /** First Row in layout */
            FirstRow = 4,
            /** First Column in layout */
            FirstColumn = 5,
            /** Finds a location if layout is empty. The found location will be the root ContentItem. */
            Empty = 6,
            /** Finds root if layout is empty, otherwise a child under root */
            Root = 7
        }
    }
    /**
     * Default LocationSelectors array used if none is specified.  Will always find a location.
     * @public
     */
    const defaultLocationSelectors: readonly LocationSelector[];
    /**
     * LocationSelectors to try to get location next to existing focused item
     * @public
     */
    const afterFocusedItemIfPossibleLocationSelectors: readonly LocationSelector[];
}

/* Excluded from this release type: LeftAndTop */

/** @public */
declare class PopoutBlockedError extends ExternalError {
    /* Excluded from this release type: __constructor */
}

/** @public */
declare interface PopoutLayoutConfig extends LayoutConfig {
    /** The id of the element the item will be appended to on popIn
    * If null, append to topmost layout element
    */
    parentId: string | null | undefined;
    /** The position of this element within its parent
    * If null, position is last
    */
    indexInParent: number | null | undefined;
    /** @deprecated use {@link (PopoutLayoutConfig:interface).window} */
    dimensions: PopoutLayoutConfig.Dimensions | undefined;
    window: PopoutLayoutConfig.Window | undefined;
}

/** @public */
declare namespace PopoutLayoutConfig {
    /** @deprecated use {@link (PopoutLayoutConfig:namespace).(Window:interface)} */
    interface Dimensions extends LayoutConfig.Dimensions {
        /** @deprecated use {@link (PopoutLayoutConfig:namespace).(Window:interface).width} */
        width: number | null;
        /** @deprecated use {@link (PopoutLayoutConfig:namespace).(Window:interface).height} */
        height: number | null;
        /** @deprecated use {@link (PopoutLayoutConfig:namespace).(Window:interface).left} */
        left: number | null;
        /** @deprecated use {@link (PopoutLayoutConfig:namespace).(Window:interface).top} */
        top: number | null;
    }
    interface Window {
        width?: number;
        height?: number;
        left?: number;
        top?: number;
    }
    namespace Window {
        function resolve(window: Window | undefined, dimensions: Dimensions | undefined): ResolvedPopoutLayoutConfig.Window;
    }
    function resolve(popoutConfig: PopoutLayoutConfig): ResolvedPopoutLayoutConfig;
}

/* Excluded from this release type: Rect */

/** @public */
declare interface ResolvedComponentItemConfig extends ResolvedHeaderedItemConfig {
    readonly type: 'component';
    readonly content: [];
    readonly title: string;
    readonly reorderEnabled: boolean;
    /**
     * The name of the component as specified in layout.registerComponent. Mandatory if type is 'component'.
     */
    readonly componentType: JsonValue;
    readonly componentState?: JsonValue;
}

/** @public */
declare namespace ResolvedComponentItemConfig {
    const defaultReorderEnabled = true;
    /* Excluded from this release type: resolveComponentTypeName */
    function createCopy(original: ResolvedComponentItemConfig): ResolvedComponentItemConfig;
    function createDefault(componentType?: JsonValue, componentState?: JsonValue, title?: string): ResolvedComponentItemConfig;
    function copyComponentType(componentType: JsonValue): JsonValue;
}

/* Excluded from this release type: ResolvedGroundItemConfig */

/** @public */
declare interface ResolvedHeaderedItemConfig extends ResolvedItemConfig {
    header: ResolvedHeaderedItemConfig.Header | undefined;
    readonly maximised: boolean;
}

/** @public */
declare namespace ResolvedHeaderedItemConfig {
    const defaultMaximised = false;
    interface Header {
        readonly show: false | Side | undefined;
        readonly popout: false | string | undefined;
        readonly maximise: false | string | undefined;
        readonly close: string | undefined;
        readonly minimise: string | undefined;
        readonly tabDropdown: false | string | undefined;
    }
    namespace Header {
        function createCopy(original: Header | undefined, show?: false | Side): Header | undefined;
    }
}

/** @public */
declare interface ResolvedItemConfig {
    readonly type: ItemType;
    readonly content: readonly ResolvedItemConfig[];
    readonly width: number;
    readonly minWidth: number;
    readonly height: number;
    readonly minHeight: number;
    readonly id: string;
    readonly isClosable: boolean;
}

/** @public */
declare namespace ResolvedItemConfig {
    const defaults: ResolvedItemConfig;
    /** Creates a copy of the original ResolvedItemConfig using an alternative content if specified */
    function createCopy(original: ResolvedItemConfig, content?: ResolvedItemConfig[]): ResolvedItemConfig;
    function createDefault(type: ItemType): ResolvedItemConfig;
    function isComponentItem(itemConfig: ResolvedItemConfig): itemConfig is ResolvedComponentItemConfig;
    function isStackItem(itemConfig: ResolvedItemConfig): itemConfig is ResolvedStackItemConfig;
    /* Excluded from this release type: isGroundItem */
}

/** @public */
declare interface ResolvedLayoutConfig {
    readonly root: ResolvedRootItemConfig | undefined;
    readonly openPopouts: ResolvedPopoutLayoutConfig[];
    readonly dimensions: ResolvedLayoutConfig.Dimensions;
    readonly settings: ResolvedLayoutConfig.Settings;
    readonly header: ResolvedLayoutConfig.Header;
    readonly resolved: true;
}

/** @public */
declare namespace ResolvedLayoutConfig {
    interface Settings {
        readonly constrainDragToContainer: boolean;
        readonly reorderEnabled: boolean;
        readonly popoutWholeStack: boolean;
        readonly blockedPopoutsThrowError: boolean;
        readonly closePopoutsOnUnload: boolean;
        readonly responsiveMode: ResponsiveMode;
        readonly tabOverlapAllowance: number;
        readonly reorderOnTabMenuClick: boolean;
        readonly tabControlOffset: number;
        readonly popInOnClose: boolean;
    }
    namespace Settings {
        const defaults: ResolvedLayoutConfig.Settings;
        function createCopy(original: Settings): Settings;
    }
    interface Dimensions {
        readonly borderWidth: number;
        readonly borderGrabWidth: number;
        readonly minItemHeight: number;
        readonly minItemWidth: number;
        readonly headerHeight: number;
        readonly dragProxyWidth: number;
        readonly dragProxyHeight: number;
    }
    namespace Dimensions {
        function createCopy(original: Dimensions): Dimensions;
        const defaults: ResolvedLayoutConfig.Dimensions;
    }
    interface Header {
        readonly show: false | Side;
        readonly popout: false | string;
        readonly dock: string;
        readonly maximise: false | string;
        readonly minimise: string;
        readonly close: false | string;
        readonly tabDropdown: string;
    }
    namespace Header {
        function createCopy(original: Header): Header;
        const defaults: ResolvedLayoutConfig.Header;
    }
    function isPopout(config: ResolvedLayoutConfig): config is ResolvedPopoutLayoutConfig;
    function createDefault(): ResolvedLayoutConfig;
    function createCopy(config: ResolvedLayoutConfig): ResolvedLayoutConfig;
    function copyOpenPopouts(original: ResolvedPopoutLayoutConfig[]): ResolvedPopoutLayoutConfig[];
    /**
     * Takes a GoldenLayout configuration object and
     * replaces its keys and values recursively with
     * one letter counterparts
     */
    function minifyConfig(layoutConfig: ResolvedLayoutConfig): ResolvedLayoutConfig;
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     */
    function unminifyConfig(minifiedConfig: ResolvedLayoutConfig): ResolvedLayoutConfig;
}

/** @public */
declare interface ResolvedPopoutLayoutConfig extends ResolvedLayoutConfig {
    readonly parentId: string | null;
    readonly indexInParent: number | null;
    readonly window: ResolvedPopoutLayoutConfig.Window;
}

/** @public */
declare namespace ResolvedPopoutLayoutConfig {
    interface Window {
        readonly width: number | null;
        readonly height: number | null;
        readonly left: number | null;
        readonly top: number | null;
    }
    namespace Window {
        function createCopy(original: Window): Window;
        const defaults: ResolvedPopoutLayoutConfig.Window;
    }
    function createCopy(original: ResolvedPopoutLayoutConfig): ResolvedPopoutLayoutConfig;
}

/**
 * RootItemConfig is the topmost ResolvedItemConfig specified by the user.
 * Note that it does not have a corresponding contentItem.  It specifies the one and only child of the Ground ContentItem
 * Note that RootItemConfig can be an ComponentItem itemConfig.  However when the Ground ContentItem's child is created
 * a ComponentItem itemConfig will create a Stack with a child ComponentItem.
 * @public
*/
declare type ResolvedRootItemConfig = ResolvedRowOrColumnItemConfig | ResolvedStackItemConfig | ResolvedComponentItemConfig;

/** @public */
declare namespace ResolvedRootItemConfig {
    function createCopy(config: ResolvedRootItemConfig): ResolvedRootItemConfig;
    function isRootItemConfig(itemConfig: ResolvedItemConfig): itemConfig is ResolvedRootItemConfig;
}

/** Base for Root or RowOrColumn ItemConfigs
 * @public
 */
declare interface ResolvedRowOrColumnItemConfig extends ResolvedItemConfig {
    readonly type: 'row' | 'column';
    /** Note that RowOrColumn ResolvedItemConfig contents, can contain ComponentItem itemConfigs.  However
     * when ContentItems are created, these ComponentItem itemConfigs will create a Stack with a child ComponentItem.
     */
    readonly content: readonly (ResolvedRowOrColumnItemConfig | ResolvedStackItemConfig | ResolvedComponentItemConfig)[];
}

/** @public */
declare namespace ResolvedRowOrColumnItemConfig {
    type ChildItemConfig = ResolvedRowOrColumnItemConfig | ResolvedStackItemConfig | ResolvedComponentItemConfig;
    function isChildItemConfig(itemConfig: ResolvedItemConfig): itemConfig is ChildItemConfig;
    function createCopy(original: ResolvedRowOrColumnItemConfig, content?: ChildItemConfig[]): ResolvedRowOrColumnItemConfig;
    function copyContent(original: readonly ChildItemConfig[]): ChildItemConfig[];
    function createDefault(type: 'row' | 'column'): ResolvedRowOrColumnItemConfig;
}

/** @public */
declare interface ResolvedStackItemConfig extends ResolvedHeaderedItemConfig {
    readonly type: 'stack';
    readonly content: ResolvedComponentItemConfig[];
    /** The index of the active item in the Stack.  Only undefined if the Stack is empty. */
    readonly activeItemIndex: number | undefined;
}

/** @public */
declare namespace ResolvedStackItemConfig {
    const defaultActiveItemIndex = 0;
    function createCopy(original: ResolvedStackItemConfig, content?: ResolvedComponentItemConfig[]): ResolvedStackItemConfig;
    function copyContent(original: ResolvedComponentItemConfig[]): ResolvedComponentItemConfig[];
    function createDefault(): ResolvedStackItemConfig;
}

/** @public */
declare type ResponsiveMode = 'none' | 'always' | 'onload';

/** @public */
declare namespace ResponsiveMode {
    const none = "none";
    const always = "always";
    const onload = "onload";
}

/** @public */
declare type RootItemConfig = RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig;

/** @public */
declare namespace RootItemConfig {
    function isRootItemConfig(itemConfig: ItemConfig): itemConfig is RootItemConfig;
    function resolve(itemConfig: RootItemConfig | undefined): ResolvedRootItemConfig | undefined;
}

/** @public */
declare class RowOrColumn extends ContentItem {
    /* Excluded from this release type: _rowOrColumnParent */
    /* Excluded from this release type: _childElementContainer */
    /* Excluded from this release type: _configType */
    /* Excluded from this release type: _isColumn */
    /* Excluded from this release type: _splitterSize */
    /* Excluded from this release type: _splitterGrabSize */
    /* Excluded from this release type: _dimension */
    /* Excluded from this release type: _splitter */
    /* Excluded from this release type: _splitterPosition */
    /* Excluded from this release type: _splitterMinPosition */
    /* Excluded from this release type: _splitterMaxPosition */
    /* Excluded from this release type: __constructor */
    newComponent(componentType: JsonValue, componentState?: JsonValue, title?: string, index?: number): ComponentItem;
    addComponent(componentType: JsonValue, componentState?: JsonValue, title?: string, index?: number): number;
    newItem(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig, index?: number): ContentItem;
    addItem(itemConfig: RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig, index?: number): number;
    /**
     * Add a new contentItem to the Row or Column
     *
     * @param contentItem -
     * @param index - The position of the new item within the Row or Column.
     *                If no index is provided the item will be added to the end
     * @param suspendResize - If true the items won't be resized. This will leave the item in
     *                        an inconsistent state and is only intended to be used if multiple
     *                        children need to be added in one go and resize is called afterwards
     *
     * @returns
     */
    addChild(contentItem: ContentItem, index?: number, suspendResize?: boolean): number;
    /**
     * Removes a child of this element
     *
     * @param contentItem -
     * @param keepChild - If true the child will be removed, but not destroyed
     *
     */
    removeChild(contentItem: ContentItem, keepChild: boolean): void;
    /**
     * Replaces a child of this Row or Column with another contentItem
     */
    replaceChild(oldChild: ContentItem, newChild: ContentItem): void;
    /**
     * Called whenever the dimensions of this item or one of its parents change
     */
    updateSize(): void;
    /* Excluded from this release type: init */
    toConfig(): ResolvedRowOrColumnItemConfig;
    /* Excluded from this release type: setParent */
    /* Excluded from this release type: updateNodeSize */
    /* Excluded from this release type: setAbsoluteSizes */
    /* Excluded from this release type: calculateAbsoluteSizes */
    /* Excluded from this release type: calculateRelativeSizes */
    /* Excluded from this release type: respectMinItemWidth */
    /* Excluded from this release type: createSplitter */
    /* Excluded from this release type: getItemsForSplitter */
    /* Excluded from this release type: getMinimumDimensions */
    /* Excluded from this release type: onSplitterDragStart */
    /* Excluded from this release type: onSplitterDrag */
    /* Excluded from this release type: onSplitterDragStop */
}

/** @public */
declare namespace RowOrColumn {
    /* Excluded from this release type: getElementDimensionSize */
    /* Excluded from this release type: setElementDimensionSize */
    /* Excluded from this release type: createElement */
}

/** @public */
declare interface RowOrColumnItemConfig extends ItemConfig {
    type: 'row' | 'column';
    content: (RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig)[];
}

/** @public */
declare namespace RowOrColumnItemConfig {
    type ChildItemConfig = RowOrColumnItemConfig | StackItemConfig | ComponentItemConfig;
    function isChildItemConfig(itemConfig: ItemConfig): itemConfig is ChildItemConfig;
    function resolve(itemConfig: RowOrColumnItemConfig): ResolvedRowOrColumnItemConfig;
    function resolveContent(content: ChildItemConfig[] | undefined): ResolvedRowOrColumnItemConfig.ChildItemConfig[];
}

/** @public */
declare type Side = 'top' | 'left' | 'right' | 'bottom';

/** @public */
declare namespace Side {
    const top = "top";
    const left = "left";
    const right = "right";
    const bottom = "bottom";
}

/** @public */
declare class Stack extends ComponentParentableItem {
    /* Excluded from this release type: _headerConfig */
    /* Excluded from this release type: _header */
    /* Excluded from this release type: _childElementContainer */
    /* Excluded from this release type: _maximisedEnabled */
    /* Excluded from this release type: _activeComponentItem */
    /* Excluded from this release type: _dropSegment */
    /* Excluded from this release type: _dropIndex */
    /* Excluded from this release type: _contentAreaDimensions */
    /* Excluded from this release type: _headerSideChanged */
    /* Excluded from this release type: _initialWantMaximise */
    /* Excluded from this release type: _initialActiveItemIndex */
    /* Excluded from this release type: _resizeListener */
    /* Excluded from this release type: _maximisedListener */
    /* Excluded from this release type: _minimisedListener */
    get childElementContainer(): HTMLElement;
    get headerShow(): boolean;
    get headerSide(): Side;
    get headerLeftRightSided(): boolean;
    /* Excluded from this release type: contentAreaDimensions */
    /* Excluded from this release type: initialWantMaximise */
    get isMaximised(): boolean;
    get stackParent(): ContentItem;
    /* Excluded from this release type: __constructor */
    updateSize(): void;
    /* Excluded from this release type: init */
    /** @deprecated Use {@link (Stack:class).setActiveComponentItem} */
    setActiveContentItem(item: ContentItem): void;
    setActiveComponentItem(componentItem: ComponentItem, focus: boolean, suppressFocusEvent?: boolean): void;
    /** @deprecated Use {@link (Stack:class).getActiveComponentItem} */
    getActiveContentItem(): ContentItem | null;
    getActiveComponentItem(): ComponentItem | undefined;
    /* Excluded from this release type: focusActiveContentItem */
    /* Excluded from this release type: setFocusedValue */
    /* Excluded from this release type: setRowColumnClosable */
    newComponent(componentType: JsonValue, componentState?: JsonValue, title?: string, index?: number): ComponentItem;
    addComponent(componentType: JsonValue, componentState?: JsonValue, title?: string, index?: number): number;
    newItem(itemConfig: ComponentItemConfig, index?: number): ContentItem;
    addItem(itemConfig: ComponentItemConfig, index?: number): number;
    addChild(contentItem: ContentItem, index?: number, focus?: boolean): number;
    removeChild(contentItem: ContentItem, keepChild: boolean): void;
    /**
     * Maximises the Item or minimises it if it is already maximised
     */
    toggleMaximise(): void;
    maximise(): void;
    minimise(): void;
    /* Excluded from this release type: destroy */
    toConfig(): ResolvedStackItemConfig;
    /* Excluded from this release type: onDrop */
    /* Excluded from this release type: highlightDropZone */
    /* Excluded from this release type: getArea */
    /* Excluded from this release type: positionHeader */
    /* Excluded from this release type: updateNodeSize */
    /* Excluded from this release type: highlightHeaderDropZone */
    /* Excluded from this release type: resetHeaderDropZone */
    /* Excluded from this release type: setupHeaderPosition */
    /* Excluded from this release type: highlightBodyDropZone */
    /* Excluded from this release type: handleResize */
    /* Excluded from this release type: handleMaximised */
    /* Excluded from this release type: handleMinimised */
    /* Excluded from this release type: handlePopoutEvent */
    /* Excluded from this release type: handleHeaderClickEvent */
    /* Excluded from this release type: handleHeaderTouchStartEvent */
    /* Excluded from this release type: handleHeaderComponentRemoveEvent */
    /* Excluded from this release type: handleHeaderComponentFocusEvent */
    /* Excluded from this release type: handleHeaderComponentStartDragEvent */
    /* Excluded from this release type: createHeaderConfig */
    /* Excluded from this release type: emitStateChangedEvent */
}

/** @public */
declare namespace Stack {
    /* Excluded from this release type: Segment */
    /* Excluded from this release type: ContentAreaDimension */
    /* Excluded from this release type: ContentAreaDimensions */
    /* Excluded from this release type: createElement */
}

/** @public */
declare interface StackItemConfig extends HeaderedItemConfig {
    type: 'stack';
    content: ComponentItemConfig[];
    /** The index of the item in content which is to be active*/
    activeItemIndex?: number;
}

/** @public */
declare namespace StackItemConfig {
    function resolve(itemConfig: StackItemConfig): ResolvedStackItemConfig;
    function resolveContent(content: ComponentItemConfig[] | undefined): ResolvedComponentItemConfig[];
}

/**
 * Represents an individual tab within a Stack's header
 * @public
 */
declare class Tab {
    /* Excluded from this release type: _layoutManager */
    /* Excluded from this release type: _componentItem */
    /* Excluded from this release type: _closeEvent */
    /* Excluded from this release type: _focusEvent */
    /* Excluded from this release type: _dragStartEvent */
    /* Excluded from this release type: _element */
    /* Excluded from this release type: _titleElement */
    /* Excluded from this release type: _closeElement */
    /* Excluded from this release type: _dragListener */
    /* Excluded from this release type: _isActive */
    /* Excluded from this release type: _tabClickListener */
    /* Excluded from this release type: _tabTouchStartListener */
    /* Excluded from this release type: _closeClickListener */
    /* Excluded from this release type: _closeTouchStartListener */
    /* Excluded from this release type: _dragStartListener */
    /* Excluded from this release type: _contentItemDestroyListener */
    /* Excluded from this release type: _tabTitleChangedListener */
    get isActive(): boolean;
    get componentItem(): ComponentItem;
    /** @deprecated use {@link (Tab:class).componentItem} */
    get contentItem(): ComponentItem;
    get element(): HTMLElement;
    get titleElement(): HTMLElement;
    get closeElement(): HTMLElement | undefined;
    get reorderEnabled(): boolean;
    set reorderEnabled(value: boolean);
    /* Excluded from this release type: __constructor */
    /**
     * Sets the tab's title to the provided string and sets
     * its title attribute to a pure text representation (without
     * html tags) of the same string.
     */
    setTitle(title: string): void;
    /**
     * Sets this tab's active state. To programmatically
     * switch tabs, use Stack.setActiveComponentItem( item ) instead.
     */
    setActive(isActive: boolean): void;
    /* Excluded from this release type: destroy */
    /* Excluded from this release type: setBlurred */
    /* Excluded from this release type: setFocused */
    /* Excluded from this release type: onDragStart */
    /* Excluded from this release type: onContentItemDestroy */
    /* Excluded from this release type: onTabClickDown */
    /* Excluded from this release type: onTabTouchStart */
    /* Excluded from this release type: onCloseClick */
    /* Excluded from this release type: onCloseTouchStart */
    /* Excluded from this release type: notifyClose */
    /* Excluded from this release type: notifyFocus */
    /* Excluded from this release type: enableReorder */
    /* Excluded from this release type: disableReorder */
}

/** @public */
declare namespace Tab {
    /* Excluded from this release type: CloseEvent */
    /* Excluded from this release type: FocusEvent */
    /* Excluded from this release type: DragStartEvent */
}

/* Excluded from this release type: TransitionIndicator */

/* Excluded from this release type: WidthAndHeight */

/* Excluded from this release type: WidthOrHeightPropertyName */

{ }
