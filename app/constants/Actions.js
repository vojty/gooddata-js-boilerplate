export const APP_READINESS_CHANGE = 'APP_READINESS_CHANGE';
export const RESET_APPLICATION = 'RESET_APPLICATION';

export const CHANGE_PROJECT = 'CHANGE_PROJECT';

export const BOOTSTRAP_DATA = 'BOOTSTRAP_DATA';
export const BOOTSTRAP_ERROR = 'BOOTSTRAP_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_DATA = 'LOGOUT_DATA';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const CATALOGUE_UPDATE_STARTED = 'CATALOGUE_UPDATE_STARTED';
export const CATALOGUE_UPDATE_FINISHED = 'CATALOGUE_UPDATE_FINISHED';

export const CATALOGUE_SET_ACTIVE_FILTER_INDEX = 'CATALOGUE_SET_ACTIVE_FILTER_INDEX';
export const CATALOGUE_SET_QUERY = 'CATALOGUE_SET_QUERY';
export const CATALOGUE_SET_ACTIVE_DATASET_ID = 'CATALOGUE_SET_ACTIVE_DATASET_ID';

export const DATE_DATASETS_DATA = 'DATE_DATASETS_DATA';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_DATA = 'DATASETS_DATA';

export const ITEM_DETAIL_REQUEST = 'ITEM_DETAIL_REQUEST';
export const ITEM_DETAIL_DATA = 'ITEM_DETAIL_DATA';

export const BUCKETS_SELECT_VISUALIZATION_TYPE = 'BUCKETS_SELECT_VISUALIZATION_TYPE';
export const BUCKETS_SET_BUCKET_ITEM_COLLAPSED = 'BUCKETS_SET_BUCKET_ITEM_COLLAPSED';
export const BUCKETS_SET_BUCKET_ITEM_SHOW_IN_PERCENT = 'BUCKETS_SET_BUCKET_ITEM_SHOW_IN_PERCENT';
export const BUCKETS_SET_BUCKET_ITEM_SHOW_POP = 'BUCKETS_SET_BUCKET_ITEM_SHOW_POP';

export const BUCKETS_SET_BUCKET_ITEM_ADD_FILTER = 'BUCKETS_SET_BUCKET_ITEM_ADD_FILTER';
export const BUCKETS_SET_BUCKET_ITEM_REMOVE_FILTER = 'BUCKETS_SET_BUCKET_ITEM_REMOVE_FILTER';
export const BUCKETS_SET_BUCKET_ITEM_UPDATE_FILTER = 'BUCKETS_SET_BUCKET_ITEM_UPDATE_FILTER';

export const BUCKETS_SET_BUCKET_ITEM_ADD_METRIC_FILTER = 'BUCKETS_SET_BUCKET_ITEM_ADD_METRIC_FILTER';
export const BUCKETS_SET_BUCKET_ITEM_REMOVE_METRIC_FILTER = 'BUCKETS_SET_BUCKET_ITEM_REMOVE_METRIC_FILTER';
export const BUCKETS_SET_BUCKET_ITEM_UPDATE_METRIC_FILTER = 'BUCKETS_SET_BUCKET_ITEM_UPDATE_METRIC_FILTER';

export const BUCKETS_SET_BUCKET_ITEM_AGGREGATION = 'BUCKETS_SET_BUCKET_ITEM_AGGREGATION';
export const BUCKETS_SET_BUCKET_ITEM_DATE_DATASET = 'BUCKETS_SET_BUCKET_ITEM_DATE_DATASET';
export const BUCKETS_SET_BUCKET_ITEM_GRANULARITY = 'BUCKETS_SET_BUCKET_ITEM_GRANULARITY';

// DnD Actions
export const BUCKETS_DND_ITEM_INSERT = 'BUCKETS_DND_ITEM_INSERT';
export const BUCKETS_DND_ITEM_REMOVE = 'BUCKETS_DND_ITEM_REMOVE';
export const BUCKETS_DND_ITEM_REPLACE = 'BUCKETS_DND_ITEM_REPLACE';
export const BUCKETS_DND_ITEM_SWAP = 'BUCKETS_DND_ITEM_SWAP';

export const DND_ITEM_DRAG_BEGIN = 'DND_ITEM_DRAG_BEGIN';
export const DND_ITEM_DRAG_END = 'DND_ITEM_DRAG_END';
export const DND_ITEM_DRAG_FAILED = 'DND_ITEM_DRAG_FAILED';

export const AVAILABLE_ATTRIBUTES_UPDATE = 'AVAILABLE_ATTRIBUTES_UPDATE';
export const AVAILABLE_ATTRIBUTES_UPDATED = 'AVAILABLE_ATTRIBUTES_UPDATED';

export const ATTRIBUTE_ELEMENTS_UPDATE = 'ATTRIBUTE_ELEMENTS_UPDATE';
export const ATTRIBUTE_ELEMENTS_UPDATED = 'ATTRIBUTE_ELEMENTS_UPDATED';

// Time travel
export const UNDO_ACTION = 'UNDO_ACTION';
export const REDO_ACTION = 'REDO_ACTION';

// Report Actions
export const REPORT_EXECUTION_STARTED = 'REPORT_EXECUTION_STARTED';
export const REPORT_EXECUTION_FINISHED = 'REPORT_EXECUTION_FINISHED';
export const REPORT_EXECUTION_ERROR = 'REPORT_EXECUTION_ERROR';
export const REPORT_EXECUTION_TOO_LARGE_TO_DISPLAY = 'REPORT_EXECUTION_TOO_LARGE_TO_DISPLAY';

export const REPORT_EXPORT_STARTED = 'REPORT_EXPORT_STARTED';
export const REPORT_EXPORT_FINISHED = 'REPORT_EXPORT_FINISHED';
export const REPORT_EXPORT_ERROR = 'REPORT_EXPORT_ERROR';

export const REPORT_TITLE_CHANGE = 'REPORT_TITLE_CHANGE';

export const SAVE_REPORT_STARTED = 'SAVE_REPORT_STARTED';
export const SAVE_REPORT_FINISHED = 'SAVE_REPORT_FINISHED';
export const SAVE_REPORT_ERROR = 'SAVE_REPORT_ERROR';
export const SAVE_REPORT_SUCCESS_MESSAGE_HIDE = 'SAVE_REPORT_SUCCESS_MESSAGE_HIDE';

export const OPEN_REPORT_STARTED = 'OPEN_REPORT_STARTED';
export const OPEN_REPORT_FINISHED = 'OPEN_REPORT_FINISHED';

export const DELETE_REPORT_STARTED = 'DELETE_REPORT_STARTED';
export const DELETE_REPORT_FINISHED = 'DELETE_REPORT_FINISHED';
export const DELETE_REPORT_ERROR = 'DELETE_REPORT_ERROR';
export const DELETE_REPORT_SUCCESS_MESSAGE_HIDE = 'DELETE_REPORT_SUCCESS_MESSAGE_HIDE';

export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const MESSAGES_DELAYED_LONG_SAVING = 'MESSAGES_DELAYED_LONG_SAVING';

export const SHOW_DIALOG_SAVING_UNTITLED_REPORT_CONFIRMATION = 'SHOW_DIALOG_SAVING_UNTITLED_REPORT_CONFIRMATION';
export const SHOW_DIALOG_OPEN_REPORT_CONFIRMATION = 'SHOW_DIALOG_OPEN_REPORT_CONFIRMATION';
export const SHOW_DIALOG_DELETE_REPORT_CONFIRMATION = 'SHOW_DIALOG_DELETE_REPORT_CONFIRMATION';
export const DIALOG_HIDE = 'DIALOG_HIDE';

// shortcuts actions
export const SHORTCUT_APPLY_ATTRIBUTE = 'SHORTCUT_APPLY_ATTRIBUTE';
export const SHORTCUT_APPLY_METRIC = 'SHORTCUT_APPLY_METRIC';
export const SHORTCUT_APPLY_METRIC_OVER_TIME = 'SHORTCUT_APPLY_METRIC_OVER_TIME';

export const SHORTCUT_SET_DROPPED_ITEM = 'SHORTCUT_SET_DROPPED_ITEM';

// shortcuts data actions
export const SHORTCUT_DATE_DATASETS_UPDATE = 'SHORTCUT_DATE_DATASETS_UPDATE';
export const SHORTCUT_DATE_DATASETS_UPDATED = 'SHORTCUT_DATE_DATASETS_UPDATED';

// Recommendations
export const RECOMMENDATION_COMPARISON_WITH_PERIOD = 'RECOMMENDATION_COMPARISON_WITH_PERIOD';
export const RECOMMENDATION_CONTRIBUTION_IN_PERCENT = 'RECOMMENDATION_CONTRIBUTION_IN_PERCENT';
export const RECOMMENDATION_METRIC_WITH_PERIOD = 'RECOMMENDATION_METRIC_WITH_PERIOD';
export const RECOMMENDATION_TRENDING = 'RECOMMENDATION_TRENDING';
export const RECOMMENDATION_COMPARISON = 'RECOMMENDATION_COMPARISON';

// Table sorting
export const SORT_TABLE_CHANGE = 'SORT_TABLE_CHANGE';
