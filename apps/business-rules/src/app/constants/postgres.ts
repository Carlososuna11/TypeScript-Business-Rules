// Class 00 — Successful Completion
export const SUCCESSFUL_COMPLETION = '00000';

// Class 01 — Warning
export const WARNING = '01000';
export const DYNAMIC_RESULT_SETS_RETURNED = '0100C';
export const IMPLICIT_ZERO_BIT_PADDING = '01008';
export const NULL_VALUE_ELIMINATED_IN_SET_FUNCTION = '01003';
export const PRIVILEGE_NOT_GRANTED = '01007';
export const PRIVILEGE_NOT_REVOKED = '01006';
export const STRING_DATA_RIGHT_TRUNCATION = '01004';
export const DEPRECATED_FEATURE = '01P01';

// Class 02 — No Data (this is also a warning class per the SQL standard)
export const NO_DATA = '02000';
export const NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED = '02001';

// Class 03 — SQL Statement Not Yet Complete
export const SQL_STATEMENT_NOT_YET_COMPLETE = '03000';

// Class 08 — Connection Exception
export const CONNECTION_EXCEPTION = '08000';
export const CONNECTION_DOES_NOT_EXIST = '08003';
export const CONNECTION_FAILURE = '08006';
export const SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION = '08001';
export const SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION = '08004';
export const TRANSACTION_RESOLUTION_UNKNOWN = '08007';
export const PROTOCOL_VIOLATION = '08P01';

// Class 09 — Triggered Action Exception
export const TRIGGERED_ACTION_EXCEPTION = '09000';

// Class 0A — Feature Not Supported
export const FEATURE_NOT_SUPPORTED = '0A000';

// Class 0B — Invalid Transaction Initiation
export const INVALID_TRANSACTION_INITIATION = '0B000';

// Class 0F — Locator Exception
export const LOCATOR_EXCEPTION = '0F000';
export const INVALID_LOCATOR_SPECIFICATION = '0F001';

// Class 0L — Invalid Grantor
export const INVALID_GRANTOR = '0L000';
export const INVALID_GRANT_OPERATION = '0LP01';

// Class 0P — Invalid Role Specification
export const INVALID_ROLE_SPECIFICATION = '0P000';

// Class 0Z — Diagnostics Exception
export const DIAGNOSTICS_EXCEPTION = '0Z000';
export const STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER = '0Z002';

// Class 20 — Case Not Found
export const CASE_NOT_FOUND = '20000';

// Class 21 — Cardinality Violation
export const CARDINALITY_VIOLATION = '21000';

// Class 22 — Data Exception
export const DATA_EXCEPTION = '22000';
export const ARRAY_SUBSCRIPT_ERROR = '2202E';
export const CHARACTER_NOT_IN_REPERTOIRE = '22021';
export const DATETIME_FIELD_OVERFLOW = '22008';
export const DIVISION_BY_ZERO = '22012';
export const ERROR_IN_ASSIGNMENT = '22005';
export const ESCAPE_CHARACTER_CONFLICT = '2200B';
export const INDICATOR_OVERFLOW = '22022';
export const INTERVAL_FIELD_OVERFLOW = '22015';
export const INVALID_ARGUMENT_FOR_LOGARITHM = '2201E';
export const INVALID_ARGUMENT_FOR_NTILE_FUNCTION = '22014';
export const INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION = '22016';
export const INVALID_ARGUMENT_FOR_POWER_FUNCTION = '2201F';
export const INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION = '2201G';
export const INVALID_CHARACTER_VALUE_FOR_CAST = '22018';
export const INVALID_DATETIME_FORMAT = '22007';
export const INVALID_ESCAPE_CHARACTER = '22019';
export const INVALID_ESCAPE_OCTET = '2200D';
export const INVALID_ESCAPE_SEQUENCE = '22025';
export const NONSTANDARD_USE_OF_ESCAPE_CHARACTER = '22P06';
export const INVALID_INDICATOR_PARAMETER_VALUE = '22010';
export const INVALID_PARAMETER_VALUE = '22023';
export const INVALID_REGULAR_EXPRESSION = '2201B';
export const INVALID_ROW_COUNT_IN_LIMIT_CLAUSE = '2201W';
export const INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE = '2201X';
export const INVALID_TIME_ZONE_DISPLACEMENT_VALUE = '22009';
export const INVALID_USE_OF_ESCAPE_CHARACTER = '2200C';
export const MOST_SPECIFIC_TYPE_MISMATCH = '2200G';
export const NULL_VALUE_NOT_ALLOWED = '22004';
export const NULL_VALUE_NO_INDICATOR_PARAMETER = '22002';
export const NUMERIC_VALUE_OUT_OF_RANGE = '22003';
export const STRING_DATA_LENGTH_MISMATCH = '22026';
export const SUBSTRING_ERROR = '22011';
export const TRIM_ERROR = '22027';
export const UNTERMINATED_C_STRING = '22024';
export const ZERO_LENGTH_CHARACTER_STRING = '2200F';
export const FLOATING_POINT_EXCEPTION = '22P01';
export const INVALID_TEXT_REPRESENTATION = '22P02';
export const INVALID_BINARY_REPRESENTATION = '22P03';
export const BAD_COPY_FILE_FORMAT = '22P04';
export const UNTRANSLATABLE_CHARACTER = '22P05';
export const NOT_AN_XML_DOCUMENT = '2200L';
export const INVALID_XML_DOCUMENT = '2200M';
export const INVALID_XML_CONTENT = '2200N';
export const INVALID_XML_COMMENT = '2200S';
export const INVALID_XML_PROCESSING_INSTRUCTION = '2200T';

// Class 23 — Integrity Constraint Violation
export const INTEGRITY_CONSTRAINT_VIOLATION = '23000';
export const RESTRICT_VIOLATION = '23001';
export const NOT_NULL_VIOLATION = '23502';
export const FOREIGN_KEY_VIOLATION = '23503';
export const UNIQUE_VIOLATION = '23505';
export const CHECK_VIOLATION = '23514';
export const EXCLUSION_VIOLATION = '23P01';

// Class 24 — Invalid Cursor State
export const INVALID_CURSOR_STATE = '24000';

// Class 25 — Invalid Transaction State
export const INVALID_TRANSACTION_STATE = '25000';
export const ACTIVE_SQL_TRANSACTION = '25001';
export const BRANCH_TRANSACTION_ALREADY_ACTIVE = '25002';
export const HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL = '25008';
export const INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION = '25003';
export const INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION = '25004';
export const NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION = '25005';
export const READ_ONLY_SQL_TRANSACTION = '25006';
export const SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED = '25007';
export const NO_ACTIVE_SQL_TRANSACTION = '25P01';
export const IN_FAILED_SQL_TRANSACTION = '25P02';

// Class 26 — Invalid SQL Statement Name
export const INVALID_SQL_STATEMENT_NAME = '26000';

// Class 27 — Triggered Data Change Violation
export const TRIGGERED_DATA_CHANGE_VIOLATION = '27000';

// Class 28 — Invalid Authorization Specification
export const INVALID_AUTHORIZATION_SPECIFICATION = '28000';
export const INVALID_PASSWORD = '28P01';

// Class 2B — Dependent Privilege Descriptors Still Exist
export const DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST = '2B000';
export const DEPENDENT_OBJECTS_STILL_EXIST = '2BP01';

// Class 2D — Invalid Transaction Termination
export const INVALID_TRANSACTION_TERMINATION = '2D000';

// Class 2F — SQL Routine Exception
export const SQL_ROUTINE_EXCEPTION = '2F000';
export const FUNCTION_EXECUTED_NO_RETURN_STATEMENT = '2F005';
export const MODIFYING_SQL_DATA_NOT_PERMITTED = '2F002';
export const PROHIBITED_SQL_STATEMENT_ATTEMPTED = '2F003';
export const READING_SQL_DATA_NOT_PERMITTED = '2F004';

// Class 34 — Invalid Cursor Name
export const INVALID_CURSOR_NAME = '34000';

// Class 38 — External Routine Exception
export const EXTERNAL_ROUTINE_EXCEPTION = '38000';
export const CONTAINING_SQL_NOT_PERMITTED = '38001';

// Class 39 — External Routine Invocation Exception
export const EXTERNAL_ROUTINE_INVOCATION_EXCEPTION = '39000';
export const INVALID_SQLSTATE_RETURNED = '39001';
export const TRIGGER_PROTOCOL_VIOLATED = '39P01';
export const SRF_PROTOCOL_VIOLATED = '39P02';

// Class 3B — Savepoint Exception
export const SAVEPOINT_EXCEPTION = '3B000';
export const INVALID_SAVEPOINT_SPECIFICATION = '3B001';

// Class 3D — Invalid Catalog Name
export const INVALID_CATALOG_NAME = '3D000';

// Class 3F — Invalid Schema Name
export const INVALID_SCHEMA_NAME = '3F000';

// Class 40 — Transaction Rollback
export const TRANSACTION_ROLLBACK = '40000';
export const TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION = '40002';
export const SERIALIZATION_FAILURE = '40001';
export const STATEMENT_COMPLETION_UNKNOWN = '40003';
export const DEADLOCK_DETECTED = '40P01';

// Class 42 — Syntax Error or Access Rule Violation
export const SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION = '42000';
export const SYNTAX_ERROR = '42601';
export const INSUFFICIENT_PRIVILEGE = '42501';
export const CANNOT_COERCE = '42846';
export const GROUPING_ERROR = '42803';
export const WINDOWING_ERROR = '42P20';
export const INVALID_RECURSION = '42P19';
export const INVALID_FOREIGN_KEY = '42830';
export const INVALID_NAME = '42602';
export const NAME_TOO_LONG = '42622';
export const RESERVED_NAME = '42939';
export const DATATYPE_MISMATCH = '42804';
export const INDETERMINATE_DATATYPE = '42P18';
export const COLLATION_MISMATCH = '42P21';
export const INDETERMINATE_COLLATION = '42P22';
export const WRONG_OBJECT_TYPE = '42809';
export const UNDEFINED_COLUMN = '42703';
export const UNDEFINED_FUNCTION = '42883';
export const UNDEFINED_TABLE = '42P01';
export const UNDEFINED_PARAMETER = '42P02';
export const UNDEFINED_OBJECT = '42704';
export const DUPLICATE_COLUMN = '42701';
export const DUPLICATE_CURSOR = '42P03';
export const DUPLICATE_DATABASE = '42P04';
export const DUPLICATE_FUNCTION = '42723';
export const DUPLICATE_PREPARED_STATEMENT = '42P05';
export const DUPLICATE_SCHEMA = '42P06';
export const DUPLICATE_TABLE = '42P07';
export const DUPLICATE_ALIAS = '42712';
export const DUPLICATE_OBJECT = '42710';
export const AMBIGUOUS_COLUMN = '42702';
export const AMBIGUOUS_FUNCTION = '42725';
export const AMBIGUOUS_PARAMETER = '42P08';
export const AMBIGUOUS_ALIAS = '42P09';
export const INVALID_COLUMN_REFERENCE = '42P10';
export const INVALID_COLUMN_DEFINITION = '42611';
export const INVALID_CURSOR_DEFINITION = '42P11';
export const INVALID_DATABASE_DEFINITION = '42P12';
export const INVALID_FUNCTION_DEFINITION = '42P13';
export const INVALID_PREPARED_STATEMENT_DEFINITION = '42P14';
export const INVALID_SCHEMA_DEFINITION = '42P15';
export const INVALID_TABLE_DEFINITION = '42P16';
export const INVALID_OBJECT_DEFINITION = '42P17';

// Class 44 — WITH CHECK OPTION Violation
export const WITH_CHECK_OPTION_VIOLATION = '44000';

// Class 53 — Insufficient Resources
export const INSUFFICIENT_RESOURCES = '53000';
export const DISK_FULL = '53100';
export const OUT_OF_MEMORY = '53200';
export const TOO_MANY_CONNECTIONS = '53300';
export const CONFIGURATION_LIMIT_EXCEEDED = '53400';

// Class 54 — Program Limit Exceeded
export const PROGRAM_LIMIT_EXCEEDED = '54000';
export const STATEMENT_TOO_COMPLEX = '54001';
export const TOO_MANY_COLUMNS = '54011';
export const TOO_MANY_ARGUMENTS = '54023';

// Class 55 — Object Not In Prerequisite State
export const OBJECT_NOT_IN_PREREQUISITE_STATE = '55000';
export const OBJECT_IN_USE = '55006';
export const CANT_CHANGE_RUNTIME_PARAM = '55P02';
export const LOCK_NOT_AVAILABLE = '55P03';

// Class 57 — Operator Intervention
export const OPERATOR_INTERVENTION = '57000';
export const QUERY_CANCELED = '57014';
export const ADMIN_SHUTDOWN = '57P01';
export const CRASH_SHUTDOWN = '57P02';
export const CANNOT_CONNECT_NOW = '57P03';
export const DATABASE_DROPPED = '57P04';

// Class 58 — System Error (errors external to PostgreSQL itself)
export const SYSTEM_ERROR = '58000';
export const IO_ERROR = '58030';
export const UNDEFINED_FILE = '58P01';
export const DUPLICATE_FILE = '58P02';

// Class F0 — Configuration File Error
export const CONFIG_FILE_ERROR = 'F0000';
export const LOCK_FILE_EXISTS = 'F0001';

// Class HV — Foreign Data Wrapper Error (SQL/MED)
export const FDW_ERROR = 'HV000';
export const FDW_COLUMN_NAME_NOT_FOUND = 'HV005';
export const FDW_DYNAMIC_PARAMETER_VALUE_NEEDED = 'HV002';
export const FDW_FUNCTION_SEQUENCE_ERROR = 'HV010';
export const FDW_INCONSISTENT_DESCRIPTOR_INFORMATION = 'HV021';
export const FDW_INVALID_ATTRIBUTE_VALUE = 'HV024';
export const FDW_INVALID_COLUMN_NAME = 'HV007';
export const FDW_INVALID_COLUMN_NUMBER = 'HV008';
export const FDW_INVALID_DATA_TYPE = 'HV004';
export const FDW_INVALID_DATA_TYPE_DESCRIPTORS = 'HV006';
export const FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER = 'HV091';
export const FDW_INVALID_HANDLE = 'HV00B';
export const FDW_INVALID_OPTION_INDEX = 'HV00C';
export const FDW_INVALID_OPTION_NAME = 'HV00D';
export const FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH = 'HV090';
export const FDW_INVALID_STRING_FORMAT = 'HV00A';
export const FDW_INVALID_USE_OF_NULL_POINTER = 'HV009';
export const FDW_TOO_MANY_HANDLES = 'HV014';
export const FDW_OUT_OF_MEMORY = 'HV001';
export const FDW_NO_SCHEMAS = 'HV00P';
export const FDW_OPTION_NAME_NOT_FOUND = 'HV00J';
export const FDW_REPLY_HANDLE = 'HV00K';
export const FDW_SCHEMA_NOT_FOUND = 'HV00Q';
export const FDW_TABLE_NOT_FOUND = 'HV00R';
export const FDW_UNABLE_TO_CREATE_EXECUTION = 'HV00L';
export const FDW_UNABLE_TO_CREATE_REPLY = 'HV00M';
export const FDW_UNABLE_TO_ESTABLISH_CONNECTION = 'HV00N';

// Class P0 — PL/pgSQL Error
export const PLPGSQL_ERROR = 'P0000';
export const RAISE_EXCEPTION = 'P0001';
export const NO_DATA_FOUND = 'P0002';
export const TOO_MANY_ROWS = 'P0003';

// Class XX — Internal Error
export const INTERNAL_ERROR = 'XX000';
export const DATA_CORRUPTED = 'XX001';
export const INDEX_CORRUPTED = 'XX002';
