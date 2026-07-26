
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskSubmission
 * 
 */
export type TaskSubmission = $Result.DefaultSelection<Prisma.$TaskSubmissionPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model ContactQuery
 * 
 */
export type ContactQuery = $Result.DefaultSelection<Prisma.$ContactQueryPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ClientProject
 * 
 */
export type ClientProject = $Result.DefaultSelection<Prisma.$ClientProjectPayload>
/**
 * Model ClientInvoice
 * 
 */
export type ClientInvoice = $Result.DefaultSelection<Prisma.$ClientInvoicePayload>
/**
 * Model OtpVerification
 * 
 */
export type OtpVerification = $Result.DefaultSelection<Prisma.$OtpVerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskSubmission`: Exposes CRUD operations for the **TaskSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskSubmissions
    * const taskSubmissions = await prisma.taskSubmission.findMany()
    * ```
    */
  get taskSubmission(): Prisma.TaskSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactQuery`: Exposes CRUD operations for the **ContactQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactQueries
    * const contactQueries = await prisma.contactQuery.findMany()
    * ```
    */
  get contactQuery(): Prisma.ContactQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientProject`: Exposes CRUD operations for the **ClientProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientProjects
    * const clientProjects = await prisma.clientProject.findMany()
    * ```
    */
  get clientProject(): Prisma.ClientProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientInvoice`: Exposes CRUD operations for the **ClientInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientInvoices
    * const clientInvoices = await prisma.clientInvoice.findMany()
    * ```
    */
  get clientInvoice(): Prisma.ClientInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpVerification`: Exposes CRUD operations for the **OtpVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpVerifications
    * const otpVerifications = await prisma.otpVerification.findMany()
    * ```
    */
  get otpVerification(): Prisma.OtpVerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Task: 'Task',
    TaskSubmission: 'TaskSubmission',
    Blog: 'Blog',
    ContactQuery: 'ContactQuery',
    Client: 'Client',
    ClientProject: 'ClientProject',
    ClientInvoice: 'ClientInvoice',
    OtpVerification: 'OtpVerification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "task" | "taskSubmission" | "blog" | "contactQuery" | "client" | "clientProject" | "clientInvoice" | "otpVerification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskSubmission: {
        payload: Prisma.$TaskSubmissionPayload<ExtArgs>
        fields: Prisma.TaskSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findFirst: {
            args: Prisma.TaskSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findMany: {
            args: Prisma.TaskSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          create: {
            args: Prisma.TaskSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          createMany: {
            args: Prisma.TaskSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          delete: {
            args: Prisma.TaskSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          update: {
            args: Prisma.TaskSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.TaskSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.TaskSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          aggregate: {
            args: Prisma.TaskSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskSubmission>
          }
          groupBy: {
            args: Prisma.TaskSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      ContactQuery: {
        payload: Prisma.$ContactQueryPayload<ExtArgs>
        fields: Prisma.ContactQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          findFirst: {
            args: Prisma.ContactQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          findMany: {
            args: Prisma.ContactQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>[]
          }
          create: {
            args: Prisma.ContactQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          createMany: {
            args: Prisma.ContactQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>[]
          }
          delete: {
            args: Prisma.ContactQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          update: {
            args: Prisma.ContactQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          deleteMany: {
            args: Prisma.ContactQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>[]
          }
          upsert: {
            args: Prisma.ContactQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactQueryPayload>
          }
          aggregate: {
            args: Prisma.ContactQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactQuery>
          }
          groupBy: {
            args: Prisma.ContactQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactQueryCountArgs<ExtArgs>
            result: $Utils.Optional<ContactQueryCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ClientProject: {
        payload: Prisma.$ClientProjectPayload<ExtArgs>
        fields: Prisma.ClientProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          findFirst: {
            args: Prisma.ClientProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          findMany: {
            args: Prisma.ClientProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>[]
          }
          create: {
            args: Prisma.ClientProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          createMany: {
            args: Prisma.ClientProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>[]
          }
          delete: {
            args: Prisma.ClientProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          update: {
            args: Prisma.ClientProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          deleteMany: {
            args: Prisma.ClientProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>[]
          }
          upsert: {
            args: Prisma.ClientProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProjectPayload>
          }
          aggregate: {
            args: Prisma.ClientProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientProject>
          }
          groupBy: {
            args: Prisma.ClientProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ClientProjectCountAggregateOutputType> | number
          }
        }
      }
      ClientInvoice: {
        payload: Prisma.$ClientInvoicePayload<ExtArgs>
        fields: Prisma.ClientInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          findFirst: {
            args: Prisma.ClientInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          findMany: {
            args: Prisma.ClientInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>[]
          }
          create: {
            args: Prisma.ClientInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          createMany: {
            args: Prisma.ClientInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>[]
          }
          delete: {
            args: Prisma.ClientInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          update: {
            args: Prisma.ClientInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          deleteMany: {
            args: Prisma.ClientInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>[]
          }
          upsert: {
            args: Prisma.ClientInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInvoicePayload>
          }
          aggregate: {
            args: Prisma.ClientInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientInvoice>
          }
          groupBy: {
            args: Prisma.ClientInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ClientInvoiceCountAggregateOutputType> | number
          }
        }
      }
      OtpVerification: {
        payload: Prisma.$OtpVerificationPayload<ExtArgs>
        fields: Prisma.OtpVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findFirst: {
            args: Prisma.OtpVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findMany: {
            args: Prisma.OtpVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          create: {
            args: Prisma.OtpVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          createMany: {
            args: Prisma.OtpVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          delete: {
            args: Prisma.OtpVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          update: {
            args: Prisma.OtpVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OtpVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          upsert: {
            args: Prisma.OtpVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          aggregate: {
            args: Prisma.OtpVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpVerification>
          }
          groupBy: {
            args: Prisma.OtpVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    task?: TaskOmit
    taskSubmission?: TaskSubmissionOmit
    blog?: BlogOmit
    contactQuery?: ContactQueryOmit
    client?: ClientOmit
    clientProject?: ClientProjectOmit
    clientInvoice?: ClientInvoiceOmit
    otpVerification?: OtpVerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    submissions: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | StudentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    submissions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | TaskCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    projects: number
    invoices: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ClientCountOutputTypeCountProjectsArgs
    invoices?: boolean | ClientCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProjectWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInvoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    amountPaid: number | null
    rating: number | null
    performanceScore: number | null
    tasksCompletedCount: number | null
  }

  export type StudentSumAggregateOutputType = {
    amountPaid: number | null
    rating: number | null
    performanceScore: number | null
    tasksCompletedCount: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    college: string | null
    domain: string | null
    duration: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    resumeUrl: string | null
    paymentStatus: string | null
    amountPaid: number | null
    paymentId: string | null
    invoiceId: string | null
    qrCode: string | null
    offerLetterUrl: string | null
    internshipId: string | null
    status: string | null
    rating: number | null
    feedback: string | null
    performanceScore: number | null
    startDate: Date | null
    endDate: Date | null
    certificateId: string | null
    certificateUrl: string | null
    lorUrl: string | null
    tasksCompletedCount: number | null
    createdAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    college: string | null
    domain: string | null
    duration: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    resumeUrl: string | null
    paymentStatus: string | null
    amountPaid: number | null
    paymentId: string | null
    invoiceId: string | null
    qrCode: string | null
    offerLetterUrl: string | null
    internshipId: string | null
    status: string | null
    rating: number | null
    feedback: string | null
    performanceScore: number | null
    startDate: Date | null
    endDate: Date | null
    certificateId: string | null
    certificateUrl: string | null
    lorUrl: string | null
    tasksCompletedCount: number | null
    createdAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    college: number
    domain: number
    duration: number
    linkedin: number
    github: number
    portfolio: number
    resumeUrl: number
    paymentStatus: number
    amountPaid: number
    paymentId: number
    invoiceId: number
    qrCode: number
    offerLetterUrl: number
    internshipId: number
    status: number
    rating: number
    feedback: number
    performanceScore: number
    startDate: number
    endDate: number
    certificateId: number
    certificateUrl: number
    lorUrl: number
    tasksCompletedCount: number
    createdAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    amountPaid?: true
    rating?: true
    performanceScore?: true
    tasksCompletedCount?: true
  }

  export type StudentSumAggregateInputType = {
    amountPaid?: true
    rating?: true
    performanceScore?: true
    tasksCompletedCount?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    domain?: true
    duration?: true
    linkedin?: true
    github?: true
    portfolio?: true
    resumeUrl?: true
    paymentStatus?: true
    amountPaid?: true
    paymentId?: true
    invoiceId?: true
    qrCode?: true
    offerLetterUrl?: true
    internshipId?: true
    status?: true
    rating?: true
    feedback?: true
    performanceScore?: true
    startDate?: true
    endDate?: true
    certificateId?: true
    certificateUrl?: true
    lorUrl?: true
    tasksCompletedCount?: true
    createdAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    domain?: true
    duration?: true
    linkedin?: true
    github?: true
    portfolio?: true
    resumeUrl?: true
    paymentStatus?: true
    amountPaid?: true
    paymentId?: true
    invoiceId?: true
    qrCode?: true
    offerLetterUrl?: true
    internshipId?: true
    status?: true
    rating?: true
    feedback?: true
    performanceScore?: true
    startDate?: true
    endDate?: true
    certificateId?: true
    certificateUrl?: true
    lorUrl?: true
    tasksCompletedCount?: true
    createdAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    domain?: true
    duration?: true
    linkedin?: true
    github?: true
    portfolio?: true
    resumeUrl?: true
    paymentStatus?: true
    amountPaid?: true
    paymentId?: true
    invoiceId?: true
    qrCode?: true
    offerLetterUrl?: true
    internshipId?: true
    status?: true
    rating?: true
    feedback?: true
    performanceScore?: true
    startDate?: true
    endDate?: true
    certificateId?: true
    certificateUrl?: true
    lorUrl?: true
    tasksCompletedCount?: true
    createdAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin: string | null
    github: string | null
    portfolio: string | null
    resumeUrl: string | null
    paymentStatus: string
    amountPaid: number
    paymentId: string | null
    invoiceId: string | null
    qrCode: string | null
    offerLetterUrl: string | null
    internshipId: string | null
    status: string
    rating: number | null
    feedback: string | null
    performanceScore: number | null
    startDate: Date | null
    endDate: Date | null
    certificateId: string | null
    certificateUrl: string | null
    lorUrl: string | null
    tasksCompletedCount: number
    createdAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    domain?: boolean
    duration?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    resumeUrl?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    qrCode?: boolean
    offerLetterUrl?: boolean
    internshipId?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    performanceScore?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateId?: boolean
    certificateUrl?: boolean
    lorUrl?: boolean
    tasksCompletedCount?: boolean
    createdAt?: boolean
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    domain?: boolean
    duration?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    resumeUrl?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    qrCode?: boolean
    offerLetterUrl?: boolean
    internshipId?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    performanceScore?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateId?: boolean
    certificateUrl?: boolean
    lorUrl?: boolean
    tasksCompletedCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    domain?: boolean
    duration?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    resumeUrl?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    qrCode?: boolean
    offerLetterUrl?: boolean
    internshipId?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    performanceScore?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateId?: boolean
    certificateUrl?: boolean
    lorUrl?: boolean
    tasksCompletedCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    domain?: boolean
    duration?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    resumeUrl?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    paymentId?: boolean
    invoiceId?: boolean
    qrCode?: boolean
    offerLetterUrl?: boolean
    internshipId?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    performanceScore?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateId?: boolean
    certificateUrl?: boolean
    lorUrl?: boolean
    tasksCompletedCount?: boolean
    createdAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "college" | "domain" | "duration" | "linkedin" | "github" | "portfolio" | "resumeUrl" | "paymentStatus" | "amountPaid" | "paymentId" | "invoiceId" | "qrCode" | "offerLetterUrl" | "internshipId" | "status" | "rating" | "feedback" | "performanceScore" | "startDate" | "endDate" | "certificateId" | "certificateUrl" | "lorUrl" | "tasksCompletedCount" | "createdAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      submissions: Prisma.$TaskSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      college: string
      domain: string
      duration: string
      linkedin: string | null
      github: string | null
      portfolio: string | null
      resumeUrl: string | null
      paymentStatus: string
      amountPaid: number
      paymentId: string | null
      invoiceId: string | null
      qrCode: string | null
      offerLetterUrl: string | null
      internshipId: string | null
      status: string
      rating: number | null
      feedback: string | null
      performanceScore: number | null
      startDate: Date | null
      endDate: Date | null
      certificateId: string | null
      certificateUrl: string | null
      lorUrl: string | null
      tasksCompletedCount: number
      createdAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Student$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly college: FieldRef<"Student", 'String'>
    readonly domain: FieldRef<"Student", 'String'>
    readonly duration: FieldRef<"Student", 'String'>
    readonly linkedin: FieldRef<"Student", 'String'>
    readonly github: FieldRef<"Student", 'String'>
    readonly portfolio: FieldRef<"Student", 'String'>
    readonly resumeUrl: FieldRef<"Student", 'String'>
    readonly paymentStatus: FieldRef<"Student", 'String'>
    readonly amountPaid: FieldRef<"Student", 'Float'>
    readonly paymentId: FieldRef<"Student", 'String'>
    readonly invoiceId: FieldRef<"Student", 'String'>
    readonly qrCode: FieldRef<"Student", 'String'>
    readonly offerLetterUrl: FieldRef<"Student", 'String'>
    readonly internshipId: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'String'>
    readonly rating: FieldRef<"Student", 'Int'>
    readonly feedback: FieldRef<"Student", 'String'>
    readonly performanceScore: FieldRef<"Student", 'Float'>
    readonly startDate: FieldRef<"Student", 'DateTime'>
    readonly endDate: FieldRef<"Student", 'DateTime'>
    readonly certificateId: FieldRef<"Student", 'String'>
    readonly certificateUrl: FieldRef<"Student", 'String'>
    readonly lorUrl: FieldRef<"Student", 'String'>
    readonly tasksCompletedCount: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.submissions
   */
  export type Student$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    cursor?: TaskSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    dayNumber: number | null
  }

  export type TaskSumAggregateOutputType = {
    dayNumber: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    domain: string | null
    dayNumber: number | null
    resourceLinks: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    domain: string | null
    dayNumber: number | null
    resourceLinks: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    domain: number
    dayNumber: number
    resourceLinks: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    dayNumber?: true
  }

  export type TaskSumAggregateInputType = {
    dayNumber?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    domain?: true
    dayNumber?: true
    resourceLinks?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    domain?: true
    dayNumber?: true
    resourceLinks?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    domain?: true
    dayNumber?: true
    resourceLinks?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks: string | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    domain?: boolean
    dayNumber?: boolean
    resourceLinks?: boolean
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    domain?: boolean
    dayNumber?: boolean
    resourceLinks?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    domain?: boolean
    dayNumber?: boolean
    resourceLinks?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    domain?: boolean
    dayNumber?: boolean
    resourceLinks?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "domain" | "dayNumber" | "resourceLinks", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      submissions: Prisma.$TaskSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      domain: string
      dayNumber: number
      resourceLinks: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Task$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly domain: FieldRef<"Task", 'String'>
    readonly dayNumber: FieldRef<"Task", 'Int'>
    readonly resourceLinks: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.submissions
   */
  export type Task$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    cursor?: TaskSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskSubmission
   */

  export type AggregateTaskSubmission = {
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  export type TaskSubmissionAvgAggregateOutputType = {
    score: number | null
  }

  export type TaskSubmissionSumAggregateOutputType = {
    score: number | null
  }

  export type TaskSubmissionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    taskId: string | null
    completionLink: string | null
    followTaskCheck: boolean | null
    comment: string | null
    status: string | null
    score: number | null
    mentorFeedback: string | null
    submittedAt: Date | null
  }

  export type TaskSubmissionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    taskId: string | null
    completionLink: string | null
    followTaskCheck: boolean | null
    comment: string | null
    status: string | null
    score: number | null
    mentorFeedback: string | null
    submittedAt: Date | null
  }

  export type TaskSubmissionCountAggregateOutputType = {
    id: number
    studentId: number
    taskId: number
    completionLink: number
    followTaskCheck: number
    comment: number
    status: number
    score: number
    mentorFeedback: number
    submittedAt: number
    _all: number
  }


  export type TaskSubmissionAvgAggregateInputType = {
    score?: true
  }

  export type TaskSubmissionSumAggregateInputType = {
    score?: true
  }

  export type TaskSubmissionMinAggregateInputType = {
    id?: true
    studentId?: true
    taskId?: true
    completionLink?: true
    followTaskCheck?: true
    comment?: true
    status?: true
    score?: true
    mentorFeedback?: true
    submittedAt?: true
  }

  export type TaskSubmissionMaxAggregateInputType = {
    id?: true
    studentId?: true
    taskId?: true
    completionLink?: true
    followTaskCheck?: true
    comment?: true
    status?: true
    score?: true
    mentorFeedback?: true
    submittedAt?: true
  }

  export type TaskSubmissionCountAggregateInputType = {
    id?: true
    studentId?: true
    taskId?: true
    completionLink?: true
    followTaskCheck?: true
    comment?: true
    status?: true
    score?: true
    mentorFeedback?: true
    submittedAt?: true
    _all?: true
  }

  export type TaskSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmission to aggregate.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskSubmissions
    **/
    _count?: true | TaskSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type GetTaskSubmissionAggregateType<T extends TaskSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskSubmission[P]>
      : GetScalarType<T[P], AggregateTaskSubmission[P]>
  }




  export type TaskSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithAggregationInput | TaskSubmissionOrderByWithAggregationInput[]
    by: TaskSubmissionScalarFieldEnum[] | TaskSubmissionScalarFieldEnum
    having?: TaskSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskSubmissionCountAggregateInputType | true
    _avg?: TaskSubmissionAvgAggregateInputType
    _sum?: TaskSubmissionSumAggregateInputType
    _min?: TaskSubmissionMinAggregateInputType
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type TaskSubmissionGroupByOutputType = {
    id: string
    studentId: string
    taskId: string
    completionLink: string
    followTaskCheck: boolean
    comment: string | null
    status: string
    score: number | null
    mentorFeedback: string | null
    submittedAt: Date
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  type GetTaskSubmissionGroupByPayload<T extends TaskSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type TaskSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    taskId?: boolean
    completionLink?: boolean
    followTaskCheck?: boolean
    comment?: boolean
    status?: boolean
    score?: boolean
    mentorFeedback?: boolean
    submittedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    taskId?: boolean
    completionLink?: boolean
    followTaskCheck?: boolean
    comment?: boolean
    status?: boolean
    score?: boolean
    mentorFeedback?: boolean
    submittedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    taskId?: boolean
    completionLink?: boolean
    followTaskCheck?: boolean
    comment?: boolean
    status?: boolean
    score?: boolean
    mentorFeedback?: boolean
    submittedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectScalar = {
    id?: boolean
    studentId?: boolean
    taskId?: boolean
    completionLink?: boolean
    followTaskCheck?: boolean
    comment?: boolean
    status?: boolean
    score?: boolean
    mentorFeedback?: boolean
    submittedAt?: boolean
  }

  export type TaskSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "taskId" | "completionLink" | "followTaskCheck" | "comment" | "status" | "score" | "mentorFeedback" | "submittedAt", ExtArgs["result"]["taskSubmission"]>
  export type TaskSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskSubmission"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      taskId: string
      completionLink: string
      followTaskCheck: boolean
      comment: string | null
      status: string
      score: number | null
      mentorFeedback: string | null
      submittedAt: Date
    }, ExtArgs["result"]["taskSubmission"]>
    composites: {}
  }

  type TaskSubmissionGetPayload<S extends boolean | null | undefined | TaskSubmissionDefaultArgs> = $Result.GetResult<Prisma.$TaskSubmissionPayload, S>

  type TaskSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskSubmissionCountAggregateInputType | true
    }

  export interface TaskSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskSubmission'], meta: { name: 'TaskSubmission' } }
    /**
     * Find zero or one TaskSubmission that matches the filter.
     * @param {TaskSubmissionFindUniqueArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskSubmissionFindUniqueArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskSubmissionFindUniqueOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskSubmissionFindFirstArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany()
     * 
     * // Get first 10 TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskSubmissionFindManyArgs>(args?: SelectSubset<T, TaskSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskSubmission.
     * @param {TaskSubmissionCreateArgs} args - Arguments to create a TaskSubmission.
     * @example
     * // Create one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.create({
     *   data: {
     *     // ... data to create a TaskSubmission
     *   }
     * })
     * 
     */
    create<T extends TaskSubmissionCreateArgs>(args: SelectSubset<T, TaskSubmissionCreateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskSubmissions.
     * @param {TaskSubmissionCreateManyArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskSubmissionCreateManyArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskSubmissions and returns the data saved in the database.
     * @param {TaskSubmissionCreateManyAndReturnArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskSubmissions and only return the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskSubmission.
     * @param {TaskSubmissionDeleteArgs} args - Arguments to delete one TaskSubmission.
     * @example
     * // Delete one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.delete({
     *   where: {
     *     // ... filter to delete one TaskSubmission
     *   }
     * })
     * 
     */
    delete<T extends TaskSubmissionDeleteArgs>(args: SelectSubset<T, TaskSubmissionDeleteArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskSubmission.
     * @param {TaskSubmissionUpdateArgs} args - Arguments to update one TaskSubmission.
     * @example
     * // Update one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskSubmissionUpdateArgs>(args: SelectSubset<T, TaskSubmissionUpdateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskSubmissions.
     * @param {TaskSubmissionDeleteManyArgs} args - Arguments to filter TaskSubmissions to delete.
     * @example
     * // Delete a few TaskSubmissions
     * const { count } = await prisma.taskSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskSubmissionDeleteManyArgs>(args?: SelectSubset<T, TaskSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskSubmissionUpdateManyArgs>(args: SelectSubset<T, TaskSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSubmissions and returns the data updated in the database.
     * @param {TaskSubmissionUpdateManyAndReturnArgs} args - Arguments to update many TaskSubmissions.
     * @example
     * // Update many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskSubmissions and only return the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskSubmission.
     * @param {TaskSubmissionUpsertArgs} args - Arguments to update or create a TaskSubmission.
     * @example
     * // Update or create a TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.upsert({
     *   create: {
     *     // ... data to create a TaskSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskSubmission we want to update
     *   }
     * })
     */
    upsert<T extends TaskSubmissionUpsertArgs>(args: SelectSubset<T, TaskSubmissionUpsertArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionCountArgs} args - Arguments to filter TaskSubmissions to count.
     * @example
     * // Count the number of TaskSubmissions
     * const count = await prisma.taskSubmission.count({
     *   where: {
     *     // ... the filter for the TaskSubmissions we want to count
     *   }
     * })
    **/
    count<T extends TaskSubmissionCountArgs>(
      args?: Subset<T, TaskSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskSubmissionAggregateArgs>(args: Subset<T, TaskSubmissionAggregateArgs>): Prisma.PrismaPromise<GetTaskSubmissionAggregateType<T>>

    /**
     * Group by TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: TaskSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskSubmission model
   */
  readonly fields: TaskSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskSubmission model
   */
  interface TaskSubmissionFieldRefs {
    readonly id: FieldRef<"TaskSubmission", 'String'>
    readonly studentId: FieldRef<"TaskSubmission", 'String'>
    readonly taskId: FieldRef<"TaskSubmission", 'String'>
    readonly completionLink: FieldRef<"TaskSubmission", 'String'>
    readonly followTaskCheck: FieldRef<"TaskSubmission", 'Boolean'>
    readonly comment: FieldRef<"TaskSubmission", 'String'>
    readonly status: FieldRef<"TaskSubmission", 'String'>
    readonly score: FieldRef<"TaskSubmission", 'Float'>
    readonly mentorFeedback: FieldRef<"TaskSubmission", 'String'>
    readonly submittedAt: FieldRef<"TaskSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskSubmission findUnique
   */
  export type TaskSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findUniqueOrThrow
   */
  export type TaskSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findFirst
   */
  export type TaskSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findFirstOrThrow
   */
  export type TaskSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findMany
   */
  export type TaskSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmissions to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission create
   */
  export type TaskSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskSubmission.
     */
    data: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
  }

  /**
   * TaskSubmission createMany
   */
  export type TaskSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
  }

  /**
   * TaskSubmission createManyAndReturn
   */
  export type TaskSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSubmission update
   */
  export type TaskSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskSubmission.
     */
    data: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
    /**
     * Choose, which TaskSubmission to update.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission updateMany
   */
  export type TaskSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskSubmissions.
     */
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSubmissions to update
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to update.
     */
    limit?: number
  }

  /**
   * TaskSubmission updateManyAndReturn
   */
  export type TaskSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update TaskSubmissions.
     */
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSubmissions to update
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSubmission upsert
   */
  export type TaskSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskSubmission to update in case it exists.
     */
    where: TaskSubmissionWhereUniqueInput
    /**
     * In case the TaskSubmission found by the `where` argument doesn't exist, create a new TaskSubmission with this data.
     */
    create: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
    /**
     * In case the TaskSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
  }

  /**
   * TaskSubmission delete
   */
  export type TaskSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter which TaskSubmission to delete.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission deleteMany
   */
  export type TaskSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmissions to delete
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to delete.
     */
    limit?: number
  }

  /**
   * TaskSubmission without action
   */
  export type TaskSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    content: string | null
    readingTime: string | null
    author: string | null
    authorImage: string | null
    bannerImage: string | null
    published: boolean | null
    createdAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    content: string | null
    readingTime: string | null
    author: string | null
    authorImage: string | null
    bannerImage: string | null
    published: boolean | null
    createdAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    content: number
    readingTime: number
    author: number
    authorImage: number
    bannerImage: number
    published: number
    createdAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    content?: true
    readingTime?: true
    author?: true
    authorImage?: true
    bannerImage?: true
    published?: true
    createdAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    content?: true
    readingTime?: true
    author?: true
    authorImage?: true
    bannerImage?: true
    published?: true
    createdAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    content?: true
    readingTime?: true
    author?: true
    authorImage?: true
    bannerImage?: true
    published?: true
    createdAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    content: string
    readingTime: string
    author: string
    authorImage: string | null
    bannerImage: string | null
    published: boolean
    createdAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    content?: boolean
    readingTime?: boolean
    author?: boolean
    authorImage?: boolean
    bannerImage?: boolean
    published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    content?: boolean
    readingTime?: boolean
    author?: boolean
    authorImage?: boolean
    bannerImage?: boolean
    published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    content?: boolean
    readingTime?: boolean
    author?: boolean
    authorImage?: boolean
    bannerImage?: boolean
    published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    content?: boolean
    readingTime?: boolean
    author?: boolean
    authorImage?: boolean
    bannerImage?: boolean
    published?: boolean
    createdAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "content" | "readingTime" | "author" | "authorImage" | "bannerImage" | "published" | "createdAt", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      content: string
      readingTime: string
      author: string
      authorImage: string | null
      bannerImage: string | null
      published: boolean
      createdAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly readingTime: FieldRef<"Blog", 'String'>
    readonly author: FieldRef<"Blog", 'String'>
    readonly authorImage: FieldRef<"Blog", 'String'>
    readonly bannerImage: FieldRef<"Blog", 'String'>
    readonly published: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model ContactQuery
   */

  export type AggregateContactQuery = {
    _count: ContactQueryCountAggregateOutputType | null
    _min: ContactQueryMinAggregateOutputType | null
    _max: ContactQueryMaxAggregateOutputType | null
  }

  export type ContactQueryMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    service: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactQueryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    service: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactQueryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    service: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactQueryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactQueryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactQueryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactQuery to aggregate.
     */
    where?: ContactQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactQueries to fetch.
     */
    orderBy?: ContactQueryOrderByWithRelationInput | ContactQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactQueries
    **/
    _count?: true | ContactQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactQueryMaxAggregateInputType
  }

  export type GetContactQueryAggregateType<T extends ContactQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateContactQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactQuery[P]>
      : GetScalarType<T[P], AggregateContactQuery[P]>
  }




  export type ContactQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactQueryWhereInput
    orderBy?: ContactQueryOrderByWithAggregationInput | ContactQueryOrderByWithAggregationInput[]
    by: ContactQueryScalarFieldEnum[] | ContactQueryScalarFieldEnum
    having?: ContactQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactQueryCountAggregateInputType | true
    _min?: ContactQueryMinAggregateInputType
    _max?: ContactQueryMaxAggregateInputType
  }

  export type ContactQueryGroupByOutputType = {
    id: string
    name: string
    email: string
    service: string | null
    message: string
    status: string
    createdAt: Date
    _count: ContactQueryCountAggregateOutputType | null
    _min: ContactQueryMinAggregateOutputType | null
    _max: ContactQueryMaxAggregateOutputType | null
  }

  type GetContactQueryGroupByPayload<T extends ContactQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactQueryGroupByOutputType[P]>
            : GetScalarType<T[P], ContactQueryGroupByOutputType[P]>
        }
      >
    >


  export type ContactQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactQuery"]>

  export type ContactQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactQuery"]>

  export type ContactQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactQuery"]>

  export type ContactQuerySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "service" | "message" | "status" | "createdAt", ExtArgs["result"]["contactQuery"]>

  export type $ContactQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      service: string | null
      message: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactQuery"]>
    composites: {}
  }

  type ContactQueryGetPayload<S extends boolean | null | undefined | ContactQueryDefaultArgs> = $Result.GetResult<Prisma.$ContactQueryPayload, S>

  type ContactQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactQueryCountAggregateInputType | true
    }

  export interface ContactQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactQuery'], meta: { name: 'ContactQuery' } }
    /**
     * Find zero or one ContactQuery that matches the filter.
     * @param {ContactQueryFindUniqueArgs} args - Arguments to find a ContactQuery
     * @example
     * // Get one ContactQuery
     * const contactQuery = await prisma.contactQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactQueryFindUniqueArgs>(args: SelectSubset<T, ContactQueryFindUniqueArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactQueryFindUniqueOrThrowArgs} args - Arguments to find a ContactQuery
     * @example
     * // Get one ContactQuery
     * const contactQuery = await prisma.contactQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryFindFirstArgs} args - Arguments to find a ContactQuery
     * @example
     * // Get one ContactQuery
     * const contactQuery = await prisma.contactQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactQueryFindFirstArgs>(args?: SelectSubset<T, ContactQueryFindFirstArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryFindFirstOrThrowArgs} args - Arguments to find a ContactQuery
     * @example
     * // Get one ContactQuery
     * const contactQuery = await prisma.contactQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactQueries
     * const contactQueries = await prisma.contactQuery.findMany()
     * 
     * // Get first 10 ContactQueries
     * const contactQueries = await prisma.contactQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactQueryWithIdOnly = await prisma.contactQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactQueryFindManyArgs>(args?: SelectSubset<T, ContactQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactQuery.
     * @param {ContactQueryCreateArgs} args - Arguments to create a ContactQuery.
     * @example
     * // Create one ContactQuery
     * const ContactQuery = await prisma.contactQuery.create({
     *   data: {
     *     // ... data to create a ContactQuery
     *   }
     * })
     * 
     */
    create<T extends ContactQueryCreateArgs>(args: SelectSubset<T, ContactQueryCreateArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactQueries.
     * @param {ContactQueryCreateManyArgs} args - Arguments to create many ContactQueries.
     * @example
     * // Create many ContactQueries
     * const contactQuery = await prisma.contactQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactQueryCreateManyArgs>(args?: SelectSubset<T, ContactQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactQueries and returns the data saved in the database.
     * @param {ContactQueryCreateManyAndReturnArgs} args - Arguments to create many ContactQueries.
     * @example
     * // Create many ContactQueries
     * const contactQuery = await prisma.contactQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactQueries and only return the `id`
     * const contactQueryWithIdOnly = await prisma.contactQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactQuery.
     * @param {ContactQueryDeleteArgs} args - Arguments to delete one ContactQuery.
     * @example
     * // Delete one ContactQuery
     * const ContactQuery = await prisma.contactQuery.delete({
     *   where: {
     *     // ... filter to delete one ContactQuery
     *   }
     * })
     * 
     */
    delete<T extends ContactQueryDeleteArgs>(args: SelectSubset<T, ContactQueryDeleteArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactQuery.
     * @param {ContactQueryUpdateArgs} args - Arguments to update one ContactQuery.
     * @example
     * // Update one ContactQuery
     * const contactQuery = await prisma.contactQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactQueryUpdateArgs>(args: SelectSubset<T, ContactQueryUpdateArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactQueries.
     * @param {ContactQueryDeleteManyArgs} args - Arguments to filter ContactQueries to delete.
     * @example
     * // Delete a few ContactQueries
     * const { count } = await prisma.contactQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactQueryDeleteManyArgs>(args?: SelectSubset<T, ContactQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactQueries
     * const contactQuery = await prisma.contactQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactQueryUpdateManyArgs>(args: SelectSubset<T, ContactQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactQueries and returns the data updated in the database.
     * @param {ContactQueryUpdateManyAndReturnArgs} args - Arguments to update many ContactQueries.
     * @example
     * // Update many ContactQueries
     * const contactQuery = await prisma.contactQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactQueries and only return the `id`
     * const contactQueryWithIdOnly = await prisma.contactQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactQuery.
     * @param {ContactQueryUpsertArgs} args - Arguments to update or create a ContactQuery.
     * @example
     * // Update or create a ContactQuery
     * const contactQuery = await prisma.contactQuery.upsert({
     *   create: {
     *     // ... data to create a ContactQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactQuery we want to update
     *   }
     * })
     */
    upsert<T extends ContactQueryUpsertArgs>(args: SelectSubset<T, ContactQueryUpsertArgs<ExtArgs>>): Prisma__ContactQueryClient<$Result.GetResult<Prisma.$ContactQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryCountArgs} args - Arguments to filter ContactQueries to count.
     * @example
     * // Count the number of ContactQueries
     * const count = await prisma.contactQuery.count({
     *   where: {
     *     // ... the filter for the ContactQueries we want to count
     *   }
     * })
    **/
    count<T extends ContactQueryCountArgs>(
      args?: Subset<T, ContactQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactQueryAggregateArgs>(args: Subset<T, ContactQueryAggregateArgs>): Prisma.PrismaPromise<GetContactQueryAggregateType<T>>

    /**
     * Group by ContactQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactQueryGroupByArgs['orderBy'] }
        : { orderBy?: ContactQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactQuery model
   */
  readonly fields: ContactQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactQuery model
   */
  interface ContactQueryFieldRefs {
    readonly id: FieldRef<"ContactQuery", 'String'>
    readonly name: FieldRef<"ContactQuery", 'String'>
    readonly email: FieldRef<"ContactQuery", 'String'>
    readonly service: FieldRef<"ContactQuery", 'String'>
    readonly message: FieldRef<"ContactQuery", 'String'>
    readonly status: FieldRef<"ContactQuery", 'String'>
    readonly createdAt: FieldRef<"ContactQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactQuery findUnique
   */
  export type ContactQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter, which ContactQuery to fetch.
     */
    where: ContactQueryWhereUniqueInput
  }

  /**
   * ContactQuery findUniqueOrThrow
   */
  export type ContactQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter, which ContactQuery to fetch.
     */
    where: ContactQueryWhereUniqueInput
  }

  /**
   * ContactQuery findFirst
   */
  export type ContactQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter, which ContactQuery to fetch.
     */
    where?: ContactQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactQueries to fetch.
     */
    orderBy?: ContactQueryOrderByWithRelationInput | ContactQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactQueries.
     */
    cursor?: ContactQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactQueries.
     */
    distinct?: ContactQueryScalarFieldEnum | ContactQueryScalarFieldEnum[]
  }

  /**
   * ContactQuery findFirstOrThrow
   */
  export type ContactQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter, which ContactQuery to fetch.
     */
    where?: ContactQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactQueries to fetch.
     */
    orderBy?: ContactQueryOrderByWithRelationInput | ContactQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactQueries.
     */
    cursor?: ContactQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactQueries.
     */
    distinct?: ContactQueryScalarFieldEnum | ContactQueryScalarFieldEnum[]
  }

  /**
   * ContactQuery findMany
   */
  export type ContactQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter, which ContactQueries to fetch.
     */
    where?: ContactQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactQueries to fetch.
     */
    orderBy?: ContactQueryOrderByWithRelationInput | ContactQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactQueries.
     */
    cursor?: ContactQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactQueries.
     */
    distinct?: ContactQueryScalarFieldEnum | ContactQueryScalarFieldEnum[]
  }

  /**
   * ContactQuery create
   */
  export type ContactQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactQuery.
     */
    data: XOR<ContactQueryCreateInput, ContactQueryUncheckedCreateInput>
  }

  /**
   * ContactQuery createMany
   */
  export type ContactQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactQueries.
     */
    data: ContactQueryCreateManyInput | ContactQueryCreateManyInput[]
  }

  /**
   * ContactQuery createManyAndReturn
   */
  export type ContactQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * The data used to create many ContactQueries.
     */
    data: ContactQueryCreateManyInput | ContactQueryCreateManyInput[]
  }

  /**
   * ContactQuery update
   */
  export type ContactQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactQuery.
     */
    data: XOR<ContactQueryUpdateInput, ContactQueryUncheckedUpdateInput>
    /**
     * Choose, which ContactQuery to update.
     */
    where: ContactQueryWhereUniqueInput
  }

  /**
   * ContactQuery updateMany
   */
  export type ContactQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactQueries.
     */
    data: XOR<ContactQueryUpdateManyMutationInput, ContactQueryUncheckedUpdateManyInput>
    /**
     * Filter which ContactQueries to update
     */
    where?: ContactQueryWhereInput
    /**
     * Limit how many ContactQueries to update.
     */
    limit?: number
  }

  /**
   * ContactQuery updateManyAndReturn
   */
  export type ContactQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * The data used to update ContactQueries.
     */
    data: XOR<ContactQueryUpdateManyMutationInput, ContactQueryUncheckedUpdateManyInput>
    /**
     * Filter which ContactQueries to update
     */
    where?: ContactQueryWhereInput
    /**
     * Limit how many ContactQueries to update.
     */
    limit?: number
  }

  /**
   * ContactQuery upsert
   */
  export type ContactQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactQuery to update in case it exists.
     */
    where: ContactQueryWhereUniqueInput
    /**
     * In case the ContactQuery found by the `where` argument doesn't exist, create a new ContactQuery with this data.
     */
    create: XOR<ContactQueryCreateInput, ContactQueryUncheckedCreateInput>
    /**
     * In case the ContactQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactQueryUpdateInput, ContactQueryUncheckedUpdateInput>
  }

  /**
   * ContactQuery delete
   */
  export type ContactQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
    /**
     * Filter which ContactQuery to delete.
     */
    where: ContactQueryWhereUniqueInput
  }

  /**
   * ContactQuery deleteMany
   */
  export type ContactQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactQueries to delete
     */
    where?: ContactQueryWhereInput
    /**
     * Limit how many ContactQueries to delete.
     */
    limit?: number
  }

  /**
   * ContactQuery without action
   */
  export type ContactQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactQuery
     */
    select?: ContactQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactQuery
     */
    omit?: ContactQueryOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    passwordHash: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    passwordHash: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    companyName: number
    passwordHash: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    passwordHash?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    passwordHash?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    passwordHash?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    companyName: string | null
    passwordHash: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    passwordHash?: boolean
    projects?: boolean | Client$projectsArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    passwordHash?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "companyName" | "passwordHash", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Client$projectsArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      projects: Prisma.$ClientProjectPayload<ExtArgs>[]
      invoices: Prisma.$ClientInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      companyName: string | null
      passwordHash: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Client$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Client$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Client$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly passwordHash: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.projects
   */
  export type Client$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    where?: ClientProjectWhereInput
    orderBy?: ClientProjectOrderByWithRelationInput | ClientProjectOrderByWithRelationInput[]
    cursor?: ClientProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientProjectScalarFieldEnum | ClientProjectScalarFieldEnum[]
  }

  /**
   * Client.invoices
   */
  export type Client$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    where?: ClientInvoiceWhereInput
    orderBy?: ClientInvoiceOrderByWithRelationInput | ClientInvoiceOrderByWithRelationInput[]
    cursor?: ClientInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientInvoiceScalarFieldEnum | ClientInvoiceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ClientProject
   */

  export type AggregateClientProject = {
    _count: ClientProjectCountAggregateOutputType | null
    _avg: ClientProjectAvgAggregateOutputType | null
    _sum: ClientProjectSumAggregateOutputType | null
    _min: ClientProjectMinAggregateOutputType | null
    _max: ClientProjectMaxAggregateOutputType | null
  }

  export type ClientProjectAvgAggregateOutputType = {
    progress: number | null
  }

  export type ClientProjectSumAggregateOutputType = {
    progress: number | null
  }

  export type ClientProjectMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    title: string | null
    description: string | null
    status: string | null
    progress: number | null
    repoUrl: string | null
    meetingLink: string | null
    nextMilestone: string | null
    deadline: Date | null
    createdAt: Date | null
  }

  export type ClientProjectMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    title: string | null
    description: string | null
    status: string | null
    progress: number | null
    repoUrl: string | null
    meetingLink: string | null
    nextMilestone: string | null
    deadline: Date | null
    createdAt: Date | null
  }

  export type ClientProjectCountAggregateOutputType = {
    id: number
    clientId: number
    title: number
    description: number
    status: number
    progress: number
    repoUrl: number
    meetingLink: number
    nextMilestone: number
    deadline: number
    createdAt: number
    _all: number
  }


  export type ClientProjectAvgAggregateInputType = {
    progress?: true
  }

  export type ClientProjectSumAggregateInputType = {
    progress?: true
  }

  export type ClientProjectMinAggregateInputType = {
    id?: true
    clientId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    repoUrl?: true
    meetingLink?: true
    nextMilestone?: true
    deadline?: true
    createdAt?: true
  }

  export type ClientProjectMaxAggregateInputType = {
    id?: true
    clientId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    repoUrl?: true
    meetingLink?: true
    nextMilestone?: true
    deadline?: true
    createdAt?: true
  }

  export type ClientProjectCountAggregateInputType = {
    id?: true
    clientId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    repoUrl?: true
    meetingLink?: true
    nextMilestone?: true
    deadline?: true
    createdAt?: true
    _all?: true
  }

  export type ClientProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProject to aggregate.
     */
    where?: ClientProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProjects to fetch.
     */
    orderBy?: ClientProjectOrderByWithRelationInput | ClientProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientProjects
    **/
    _count?: true | ClientProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientProjectMaxAggregateInputType
  }

  export type GetClientProjectAggregateType<T extends ClientProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateClientProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientProject[P]>
      : GetScalarType<T[P], AggregateClientProject[P]>
  }




  export type ClientProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProjectWhereInput
    orderBy?: ClientProjectOrderByWithAggregationInput | ClientProjectOrderByWithAggregationInput[]
    by: ClientProjectScalarFieldEnum[] | ClientProjectScalarFieldEnum
    having?: ClientProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientProjectCountAggregateInputType | true
    _avg?: ClientProjectAvgAggregateInputType
    _sum?: ClientProjectSumAggregateInputType
    _min?: ClientProjectMinAggregateInputType
    _max?: ClientProjectMaxAggregateInputType
  }

  export type ClientProjectGroupByOutputType = {
    id: string
    clientId: string
    title: string
    description: string
    status: string
    progress: number
    repoUrl: string | null
    meetingLink: string | null
    nextMilestone: string | null
    deadline: Date | null
    createdAt: Date
    _count: ClientProjectCountAggregateOutputType | null
    _avg: ClientProjectAvgAggregateOutputType | null
    _sum: ClientProjectSumAggregateOutputType | null
    _min: ClientProjectMinAggregateOutputType | null
    _max: ClientProjectMaxAggregateOutputType | null
  }

  type GetClientProjectGroupByPayload<T extends ClientProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ClientProjectGroupByOutputType[P]>
        }
      >
    >


  export type ClientProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    repoUrl?: boolean
    meetingLink?: boolean
    nextMilestone?: boolean
    deadline?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProject"]>

  export type ClientProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    repoUrl?: boolean
    meetingLink?: boolean
    nextMilestone?: boolean
    deadline?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProject"]>

  export type ClientProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    repoUrl?: boolean
    meetingLink?: boolean
    nextMilestone?: boolean
    deadline?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProject"]>

  export type ClientProjectSelectScalar = {
    id?: boolean
    clientId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    repoUrl?: boolean
    meetingLink?: boolean
    nextMilestone?: boolean
    deadline?: boolean
    createdAt?: boolean
  }

  export type ClientProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "title" | "description" | "status" | "progress" | "repoUrl" | "meetingLink" | "nextMilestone" | "deadline" | "createdAt", ExtArgs["result"]["clientProject"]>
  export type ClientProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ClientProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ClientProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ClientProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientProject"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      title: string
      description: string
      status: string
      progress: number
      repoUrl: string | null
      meetingLink: string | null
      nextMilestone: string | null
      deadline: Date | null
      createdAt: Date
    }, ExtArgs["result"]["clientProject"]>
    composites: {}
  }

  type ClientProjectGetPayload<S extends boolean | null | undefined | ClientProjectDefaultArgs> = $Result.GetResult<Prisma.$ClientProjectPayload, S>

  type ClientProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientProjectCountAggregateInputType | true
    }

  export interface ClientProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientProject'], meta: { name: 'ClientProject' } }
    /**
     * Find zero or one ClientProject that matches the filter.
     * @param {ClientProjectFindUniqueArgs} args - Arguments to find a ClientProject
     * @example
     * // Get one ClientProject
     * const clientProject = await prisma.clientProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientProjectFindUniqueArgs>(args: SelectSubset<T, ClientProjectFindUniqueArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientProjectFindUniqueOrThrowArgs} args - Arguments to find a ClientProject
     * @example
     * // Get one ClientProject
     * const clientProject = await prisma.clientProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectFindFirstArgs} args - Arguments to find a ClientProject
     * @example
     * // Get one ClientProject
     * const clientProject = await prisma.clientProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientProjectFindFirstArgs>(args?: SelectSubset<T, ClientProjectFindFirstArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectFindFirstOrThrowArgs} args - Arguments to find a ClientProject
     * @example
     * // Get one ClientProject
     * const clientProject = await prisma.clientProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientProjects
     * const clientProjects = await prisma.clientProject.findMany()
     * 
     * // Get first 10 ClientProjects
     * const clientProjects = await prisma.clientProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientProjectWithIdOnly = await prisma.clientProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientProjectFindManyArgs>(args?: SelectSubset<T, ClientProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientProject.
     * @param {ClientProjectCreateArgs} args - Arguments to create a ClientProject.
     * @example
     * // Create one ClientProject
     * const ClientProject = await prisma.clientProject.create({
     *   data: {
     *     // ... data to create a ClientProject
     *   }
     * })
     * 
     */
    create<T extends ClientProjectCreateArgs>(args: SelectSubset<T, ClientProjectCreateArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientProjects.
     * @param {ClientProjectCreateManyArgs} args - Arguments to create many ClientProjects.
     * @example
     * // Create many ClientProjects
     * const clientProject = await prisma.clientProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientProjectCreateManyArgs>(args?: SelectSubset<T, ClientProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientProjects and returns the data saved in the database.
     * @param {ClientProjectCreateManyAndReturnArgs} args - Arguments to create many ClientProjects.
     * @example
     * // Create many ClientProjects
     * const clientProject = await prisma.clientProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientProjects and only return the `id`
     * const clientProjectWithIdOnly = await prisma.clientProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientProject.
     * @param {ClientProjectDeleteArgs} args - Arguments to delete one ClientProject.
     * @example
     * // Delete one ClientProject
     * const ClientProject = await prisma.clientProject.delete({
     *   where: {
     *     // ... filter to delete one ClientProject
     *   }
     * })
     * 
     */
    delete<T extends ClientProjectDeleteArgs>(args: SelectSubset<T, ClientProjectDeleteArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientProject.
     * @param {ClientProjectUpdateArgs} args - Arguments to update one ClientProject.
     * @example
     * // Update one ClientProject
     * const clientProject = await prisma.clientProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientProjectUpdateArgs>(args: SelectSubset<T, ClientProjectUpdateArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientProjects.
     * @param {ClientProjectDeleteManyArgs} args - Arguments to filter ClientProjects to delete.
     * @example
     * // Delete a few ClientProjects
     * const { count } = await prisma.clientProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientProjectDeleteManyArgs>(args?: SelectSubset<T, ClientProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientProjects
     * const clientProject = await prisma.clientProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientProjectUpdateManyArgs>(args: SelectSubset<T, ClientProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProjects and returns the data updated in the database.
     * @param {ClientProjectUpdateManyAndReturnArgs} args - Arguments to update many ClientProjects.
     * @example
     * // Update many ClientProjects
     * const clientProject = await prisma.clientProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientProjects and only return the `id`
     * const clientProjectWithIdOnly = await prisma.clientProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientProject.
     * @param {ClientProjectUpsertArgs} args - Arguments to update or create a ClientProject.
     * @example
     * // Update or create a ClientProject
     * const clientProject = await prisma.clientProject.upsert({
     *   create: {
     *     // ... data to create a ClientProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientProject we want to update
     *   }
     * })
     */
    upsert<T extends ClientProjectUpsertArgs>(args: SelectSubset<T, ClientProjectUpsertArgs<ExtArgs>>): Prisma__ClientProjectClient<$Result.GetResult<Prisma.$ClientProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectCountArgs} args - Arguments to filter ClientProjects to count.
     * @example
     * // Count the number of ClientProjects
     * const count = await prisma.clientProject.count({
     *   where: {
     *     // ... the filter for the ClientProjects we want to count
     *   }
     * })
    **/
    count<T extends ClientProjectCountArgs>(
      args?: Subset<T, ClientProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientProjectAggregateArgs>(args: Subset<T, ClientProjectAggregateArgs>): Prisma.PrismaPromise<GetClientProjectAggregateType<T>>

    /**
     * Group by ClientProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientProjectGroupByArgs['orderBy'] }
        : { orderBy?: ClientProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientProject model
   */
  readonly fields: ClientProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientProject model
   */
  interface ClientProjectFieldRefs {
    readonly id: FieldRef<"ClientProject", 'String'>
    readonly clientId: FieldRef<"ClientProject", 'String'>
    readonly title: FieldRef<"ClientProject", 'String'>
    readonly description: FieldRef<"ClientProject", 'String'>
    readonly status: FieldRef<"ClientProject", 'String'>
    readonly progress: FieldRef<"ClientProject", 'Float'>
    readonly repoUrl: FieldRef<"ClientProject", 'String'>
    readonly meetingLink: FieldRef<"ClientProject", 'String'>
    readonly nextMilestone: FieldRef<"ClientProject", 'String'>
    readonly deadline: FieldRef<"ClientProject", 'DateTime'>
    readonly createdAt: FieldRef<"ClientProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientProject findUnique
   */
  export type ClientProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter, which ClientProject to fetch.
     */
    where: ClientProjectWhereUniqueInput
  }

  /**
   * ClientProject findUniqueOrThrow
   */
  export type ClientProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter, which ClientProject to fetch.
     */
    where: ClientProjectWhereUniqueInput
  }

  /**
   * ClientProject findFirst
   */
  export type ClientProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter, which ClientProject to fetch.
     */
    where?: ClientProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProjects to fetch.
     */
    orderBy?: ClientProjectOrderByWithRelationInput | ClientProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProjects.
     */
    cursor?: ClientProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProjects.
     */
    distinct?: ClientProjectScalarFieldEnum | ClientProjectScalarFieldEnum[]
  }

  /**
   * ClientProject findFirstOrThrow
   */
  export type ClientProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter, which ClientProject to fetch.
     */
    where?: ClientProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProjects to fetch.
     */
    orderBy?: ClientProjectOrderByWithRelationInput | ClientProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProjects.
     */
    cursor?: ClientProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProjects.
     */
    distinct?: ClientProjectScalarFieldEnum | ClientProjectScalarFieldEnum[]
  }

  /**
   * ClientProject findMany
   */
  export type ClientProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter, which ClientProjects to fetch.
     */
    where?: ClientProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProjects to fetch.
     */
    orderBy?: ClientProjectOrderByWithRelationInput | ClientProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientProjects.
     */
    cursor?: ClientProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProjects.
     */
    distinct?: ClientProjectScalarFieldEnum | ClientProjectScalarFieldEnum[]
  }

  /**
   * ClientProject create
   */
  export type ClientProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientProject.
     */
    data: XOR<ClientProjectCreateInput, ClientProjectUncheckedCreateInput>
  }

  /**
   * ClientProject createMany
   */
  export type ClientProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientProjects.
     */
    data: ClientProjectCreateManyInput | ClientProjectCreateManyInput[]
  }

  /**
   * ClientProject createManyAndReturn
   */
  export type ClientProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * The data used to create many ClientProjects.
     */
    data: ClientProjectCreateManyInput | ClientProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProject update
   */
  export type ClientProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientProject.
     */
    data: XOR<ClientProjectUpdateInput, ClientProjectUncheckedUpdateInput>
    /**
     * Choose, which ClientProject to update.
     */
    where: ClientProjectWhereUniqueInput
  }

  /**
   * ClientProject updateMany
   */
  export type ClientProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientProjects.
     */
    data: XOR<ClientProjectUpdateManyMutationInput, ClientProjectUncheckedUpdateManyInput>
    /**
     * Filter which ClientProjects to update
     */
    where?: ClientProjectWhereInput
    /**
     * Limit how many ClientProjects to update.
     */
    limit?: number
  }

  /**
   * ClientProject updateManyAndReturn
   */
  export type ClientProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * The data used to update ClientProjects.
     */
    data: XOR<ClientProjectUpdateManyMutationInput, ClientProjectUncheckedUpdateManyInput>
    /**
     * Filter which ClientProjects to update
     */
    where?: ClientProjectWhereInput
    /**
     * Limit how many ClientProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProject upsert
   */
  export type ClientProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientProject to update in case it exists.
     */
    where: ClientProjectWhereUniqueInput
    /**
     * In case the ClientProject found by the `where` argument doesn't exist, create a new ClientProject with this data.
     */
    create: XOR<ClientProjectCreateInput, ClientProjectUncheckedCreateInput>
    /**
     * In case the ClientProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientProjectUpdateInput, ClientProjectUncheckedUpdateInput>
  }

  /**
   * ClientProject delete
   */
  export type ClientProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
    /**
     * Filter which ClientProject to delete.
     */
    where: ClientProjectWhereUniqueInput
  }

  /**
   * ClientProject deleteMany
   */
  export type ClientProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProjects to delete
     */
    where?: ClientProjectWhereInput
    /**
     * Limit how many ClientProjects to delete.
     */
    limit?: number
  }

  /**
   * ClientProject without action
   */
  export type ClientProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProject
     */
    select?: ClientProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProject
     */
    omit?: ClientProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProjectInclude<ExtArgs> | null
  }


  /**
   * Model ClientInvoice
   */

  export type AggregateClientInvoice = {
    _count: ClientInvoiceCountAggregateOutputType | null
    _avg: ClientInvoiceAvgAggregateOutputType | null
    _sum: ClientInvoiceSumAggregateOutputType | null
    _min: ClientInvoiceMinAggregateOutputType | null
    _max: ClientInvoiceMaxAggregateOutputType | null
  }

  export type ClientInvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type ClientInvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type ClientInvoiceMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    invoiceNumber: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    pdfUrl: string | null
    createdAt: Date | null
  }

  export type ClientInvoiceMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    invoiceNumber: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    pdfUrl: string | null
    createdAt: Date | null
  }

  export type ClientInvoiceCountAggregateOutputType = {
    id: number
    clientId: number
    invoiceNumber: number
    amount: number
    dueDate: number
    status: number
    pdfUrl: number
    createdAt: number
    _all: number
  }


  export type ClientInvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type ClientInvoiceSumAggregateInputType = {
    amount?: true
  }

  export type ClientInvoiceMinAggregateInputType = {
    id?: true
    clientId?: true
    invoiceNumber?: true
    amount?: true
    dueDate?: true
    status?: true
    pdfUrl?: true
    createdAt?: true
  }

  export type ClientInvoiceMaxAggregateInputType = {
    id?: true
    clientId?: true
    invoiceNumber?: true
    amount?: true
    dueDate?: true
    status?: true
    pdfUrl?: true
    createdAt?: true
  }

  export type ClientInvoiceCountAggregateInputType = {
    id?: true
    clientId?: true
    invoiceNumber?: true
    amount?: true
    dueDate?: true
    status?: true
    pdfUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ClientInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInvoice to aggregate.
     */
    where?: ClientInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInvoices to fetch.
     */
    orderBy?: ClientInvoiceOrderByWithRelationInput | ClientInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientInvoices
    **/
    _count?: true | ClientInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientInvoiceMaxAggregateInputType
  }

  export type GetClientInvoiceAggregateType<T extends ClientInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateClientInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientInvoice[P]>
      : GetScalarType<T[P], AggregateClientInvoice[P]>
  }




  export type ClientInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInvoiceWhereInput
    orderBy?: ClientInvoiceOrderByWithAggregationInput | ClientInvoiceOrderByWithAggregationInput[]
    by: ClientInvoiceScalarFieldEnum[] | ClientInvoiceScalarFieldEnum
    having?: ClientInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientInvoiceCountAggregateInputType | true
    _avg?: ClientInvoiceAvgAggregateInputType
    _sum?: ClientInvoiceSumAggregateInputType
    _min?: ClientInvoiceMinAggregateInputType
    _max?: ClientInvoiceMaxAggregateInputType
  }

  export type ClientInvoiceGroupByOutputType = {
    id: string
    clientId: string
    invoiceNumber: string
    amount: number
    dueDate: Date
    status: string
    pdfUrl: string | null
    createdAt: Date
    _count: ClientInvoiceCountAggregateOutputType | null
    _avg: ClientInvoiceAvgAggregateOutputType | null
    _sum: ClientInvoiceSumAggregateOutputType | null
    _min: ClientInvoiceMinAggregateOutputType | null
    _max: ClientInvoiceMaxAggregateOutputType | null
  }

  type GetClientInvoiceGroupByPayload<T extends ClientInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ClientInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type ClientInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientInvoice"]>

  export type ClientInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientInvoice"]>

  export type ClientInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientInvoice"]>

  export type ClientInvoiceSelectScalar = {
    id?: boolean
    clientId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
  }

  export type ClientInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "invoiceNumber" | "amount" | "dueDate" | "status" | "pdfUrl" | "createdAt", ExtArgs["result"]["clientInvoice"]>
  export type ClientInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ClientInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ClientInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ClientInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientInvoice"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      invoiceNumber: string
      amount: number
      dueDate: Date
      status: string
      pdfUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["clientInvoice"]>
    composites: {}
  }

  type ClientInvoiceGetPayload<S extends boolean | null | undefined | ClientInvoiceDefaultArgs> = $Result.GetResult<Prisma.$ClientInvoicePayload, S>

  type ClientInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientInvoiceCountAggregateInputType | true
    }

  export interface ClientInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientInvoice'], meta: { name: 'ClientInvoice' } }
    /**
     * Find zero or one ClientInvoice that matches the filter.
     * @param {ClientInvoiceFindUniqueArgs} args - Arguments to find a ClientInvoice
     * @example
     * // Get one ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientInvoiceFindUniqueArgs>(args: SelectSubset<T, ClientInvoiceFindUniqueArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientInvoiceFindUniqueOrThrowArgs} args - Arguments to find a ClientInvoice
     * @example
     * // Get one ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceFindFirstArgs} args - Arguments to find a ClientInvoice
     * @example
     * // Get one ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientInvoiceFindFirstArgs>(args?: SelectSubset<T, ClientInvoiceFindFirstArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceFindFirstOrThrowArgs} args - Arguments to find a ClientInvoice
     * @example
     * // Get one ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientInvoices
     * const clientInvoices = await prisma.clientInvoice.findMany()
     * 
     * // Get first 10 ClientInvoices
     * const clientInvoices = await prisma.clientInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientInvoiceWithIdOnly = await prisma.clientInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientInvoiceFindManyArgs>(args?: SelectSubset<T, ClientInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientInvoice.
     * @param {ClientInvoiceCreateArgs} args - Arguments to create a ClientInvoice.
     * @example
     * // Create one ClientInvoice
     * const ClientInvoice = await prisma.clientInvoice.create({
     *   data: {
     *     // ... data to create a ClientInvoice
     *   }
     * })
     * 
     */
    create<T extends ClientInvoiceCreateArgs>(args: SelectSubset<T, ClientInvoiceCreateArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientInvoices.
     * @param {ClientInvoiceCreateManyArgs} args - Arguments to create many ClientInvoices.
     * @example
     * // Create many ClientInvoices
     * const clientInvoice = await prisma.clientInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientInvoiceCreateManyArgs>(args?: SelectSubset<T, ClientInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientInvoices and returns the data saved in the database.
     * @param {ClientInvoiceCreateManyAndReturnArgs} args - Arguments to create many ClientInvoices.
     * @example
     * // Create many ClientInvoices
     * const clientInvoice = await prisma.clientInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientInvoices and only return the `id`
     * const clientInvoiceWithIdOnly = await prisma.clientInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientInvoice.
     * @param {ClientInvoiceDeleteArgs} args - Arguments to delete one ClientInvoice.
     * @example
     * // Delete one ClientInvoice
     * const ClientInvoice = await prisma.clientInvoice.delete({
     *   where: {
     *     // ... filter to delete one ClientInvoice
     *   }
     * })
     * 
     */
    delete<T extends ClientInvoiceDeleteArgs>(args: SelectSubset<T, ClientInvoiceDeleteArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientInvoice.
     * @param {ClientInvoiceUpdateArgs} args - Arguments to update one ClientInvoice.
     * @example
     * // Update one ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientInvoiceUpdateArgs>(args: SelectSubset<T, ClientInvoiceUpdateArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientInvoices.
     * @param {ClientInvoiceDeleteManyArgs} args - Arguments to filter ClientInvoices to delete.
     * @example
     * // Delete a few ClientInvoices
     * const { count } = await prisma.clientInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientInvoiceDeleteManyArgs>(args?: SelectSubset<T, ClientInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientInvoices
     * const clientInvoice = await prisma.clientInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientInvoiceUpdateManyArgs>(args: SelectSubset<T, ClientInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInvoices and returns the data updated in the database.
     * @param {ClientInvoiceUpdateManyAndReturnArgs} args - Arguments to update many ClientInvoices.
     * @example
     * // Update many ClientInvoices
     * const clientInvoice = await prisma.clientInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientInvoices and only return the `id`
     * const clientInvoiceWithIdOnly = await prisma.clientInvoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientInvoice.
     * @param {ClientInvoiceUpsertArgs} args - Arguments to update or create a ClientInvoice.
     * @example
     * // Update or create a ClientInvoice
     * const clientInvoice = await prisma.clientInvoice.upsert({
     *   create: {
     *     // ... data to create a ClientInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientInvoice we want to update
     *   }
     * })
     */
    upsert<T extends ClientInvoiceUpsertArgs>(args: SelectSubset<T, ClientInvoiceUpsertArgs<ExtArgs>>): Prisma__ClientInvoiceClient<$Result.GetResult<Prisma.$ClientInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceCountArgs} args - Arguments to filter ClientInvoices to count.
     * @example
     * // Count the number of ClientInvoices
     * const count = await prisma.clientInvoice.count({
     *   where: {
     *     // ... the filter for the ClientInvoices we want to count
     *   }
     * })
    **/
    count<T extends ClientInvoiceCountArgs>(
      args?: Subset<T, ClientInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientInvoiceAggregateArgs>(args: Subset<T, ClientInvoiceAggregateArgs>): Prisma.PrismaPromise<GetClientInvoiceAggregateType<T>>

    /**
     * Group by ClientInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: ClientInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientInvoice model
   */
  readonly fields: ClientInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientInvoice model
   */
  interface ClientInvoiceFieldRefs {
    readonly id: FieldRef<"ClientInvoice", 'String'>
    readonly clientId: FieldRef<"ClientInvoice", 'String'>
    readonly invoiceNumber: FieldRef<"ClientInvoice", 'String'>
    readonly amount: FieldRef<"ClientInvoice", 'Float'>
    readonly dueDate: FieldRef<"ClientInvoice", 'DateTime'>
    readonly status: FieldRef<"ClientInvoice", 'String'>
    readonly pdfUrl: FieldRef<"ClientInvoice", 'String'>
    readonly createdAt: FieldRef<"ClientInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientInvoice findUnique
   */
  export type ClientInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientInvoice to fetch.
     */
    where: ClientInvoiceWhereUniqueInput
  }

  /**
   * ClientInvoice findUniqueOrThrow
   */
  export type ClientInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientInvoice to fetch.
     */
    where: ClientInvoiceWhereUniqueInput
  }

  /**
   * ClientInvoice findFirst
   */
  export type ClientInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientInvoice to fetch.
     */
    where?: ClientInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInvoices to fetch.
     */
    orderBy?: ClientInvoiceOrderByWithRelationInput | ClientInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInvoices.
     */
    cursor?: ClientInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInvoices.
     */
    distinct?: ClientInvoiceScalarFieldEnum | ClientInvoiceScalarFieldEnum[]
  }

  /**
   * ClientInvoice findFirstOrThrow
   */
  export type ClientInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientInvoice to fetch.
     */
    where?: ClientInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInvoices to fetch.
     */
    orderBy?: ClientInvoiceOrderByWithRelationInput | ClientInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInvoices.
     */
    cursor?: ClientInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInvoices.
     */
    distinct?: ClientInvoiceScalarFieldEnum | ClientInvoiceScalarFieldEnum[]
  }

  /**
   * ClientInvoice findMany
   */
  export type ClientInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientInvoices to fetch.
     */
    where?: ClientInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInvoices to fetch.
     */
    orderBy?: ClientInvoiceOrderByWithRelationInput | ClientInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientInvoices.
     */
    cursor?: ClientInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInvoices.
     */
    distinct?: ClientInvoiceScalarFieldEnum | ClientInvoiceScalarFieldEnum[]
  }

  /**
   * ClientInvoice create
   */
  export type ClientInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientInvoice.
     */
    data: XOR<ClientInvoiceCreateInput, ClientInvoiceUncheckedCreateInput>
  }

  /**
   * ClientInvoice createMany
   */
  export type ClientInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientInvoices.
     */
    data: ClientInvoiceCreateManyInput | ClientInvoiceCreateManyInput[]
  }

  /**
   * ClientInvoice createManyAndReturn
   */
  export type ClientInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many ClientInvoices.
     */
    data: ClientInvoiceCreateManyInput | ClientInvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientInvoice update
   */
  export type ClientInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientInvoice.
     */
    data: XOR<ClientInvoiceUpdateInput, ClientInvoiceUncheckedUpdateInput>
    /**
     * Choose, which ClientInvoice to update.
     */
    where: ClientInvoiceWhereUniqueInput
  }

  /**
   * ClientInvoice updateMany
   */
  export type ClientInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientInvoices.
     */
    data: XOR<ClientInvoiceUpdateManyMutationInput, ClientInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ClientInvoices to update
     */
    where?: ClientInvoiceWhereInput
    /**
     * Limit how many ClientInvoices to update.
     */
    limit?: number
  }

  /**
   * ClientInvoice updateManyAndReturn
   */
  export type ClientInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update ClientInvoices.
     */
    data: XOR<ClientInvoiceUpdateManyMutationInput, ClientInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ClientInvoices to update
     */
    where?: ClientInvoiceWhereInput
    /**
     * Limit how many ClientInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientInvoice upsert
   */
  export type ClientInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientInvoice to update in case it exists.
     */
    where: ClientInvoiceWhereUniqueInput
    /**
     * In case the ClientInvoice found by the `where` argument doesn't exist, create a new ClientInvoice with this data.
     */
    create: XOR<ClientInvoiceCreateInput, ClientInvoiceUncheckedCreateInput>
    /**
     * In case the ClientInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientInvoiceUpdateInput, ClientInvoiceUncheckedUpdateInput>
  }

  /**
   * ClientInvoice delete
   */
  export type ClientInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
    /**
     * Filter which ClientInvoice to delete.
     */
    where: ClientInvoiceWhereUniqueInput
  }

  /**
   * ClientInvoice deleteMany
   */
  export type ClientInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInvoices to delete
     */
    where?: ClientInvoiceWhereInput
    /**
     * Limit how many ClientInvoices to delete.
     */
    limit?: number
  }

  /**
   * ClientInvoice without action
   */
  export type ClientInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInvoice
     */
    select?: ClientInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInvoice
     */
    omit?: ClientInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model OtpVerification
   */

  export type AggregateOtpVerification = {
    _count: OtpVerificationCountAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  export type OtpVerificationMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    createdAt: Date | null
  }

  export type OtpVerificationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    createdAt: Date | null
  }

  export type OtpVerificationCountAggregateOutputType = {
    id: number
    email: number
    code: number
    createdAt: number
    _all: number
  }


  export type OtpVerificationMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
  }

  export type OtpVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
  }

  export type OtpVerificationCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type OtpVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerification to aggregate.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpVerifications
    **/
    _count?: true | OtpVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type GetOtpVerificationAggregateType<T extends OtpVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpVerification[P]>
      : GetScalarType<T[P], AggregateOtpVerification[P]>
  }




  export type OtpVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpVerificationWhereInput
    orderBy?: OtpVerificationOrderByWithAggregationInput | OtpVerificationOrderByWithAggregationInput[]
    by: OtpVerificationScalarFieldEnum[] | OtpVerificationScalarFieldEnum
    having?: OtpVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpVerificationCountAggregateInputType | true
    _min?: OtpVerificationMinAggregateInputType
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type OtpVerificationGroupByOutputType = {
    id: string
    email: string
    code: string
    createdAt: Date
    _count: OtpVerificationCountAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  type GetOtpVerificationGroupByPayload<T extends OtpVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OtpVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type OtpVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "createdAt", ExtArgs["result"]["otpVerification"]>

  export type $OtpVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      createdAt: Date
    }, ExtArgs["result"]["otpVerification"]>
    composites: {}
  }

  type OtpVerificationGetPayload<S extends boolean | null | undefined | OtpVerificationDefaultArgs> = $Result.GetResult<Prisma.$OtpVerificationPayload, S>

  type OtpVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpVerificationCountAggregateInputType | true
    }

  export interface OtpVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpVerification'], meta: { name: 'OtpVerification' } }
    /**
     * Find zero or one OtpVerification that matches the filter.
     * @param {OtpVerificationFindUniqueArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpVerificationFindUniqueArgs>(args: SelectSubset<T, OtpVerificationFindUniqueArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpVerificationFindUniqueOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpVerificationFindFirstArgs>(args?: SelectSubset<T, OtpVerificationFindFirstArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany()
     * 
     * // Get first 10 OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpVerificationFindManyArgs>(args?: SelectSubset<T, OtpVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpVerification.
     * @param {OtpVerificationCreateArgs} args - Arguments to create a OtpVerification.
     * @example
     * // Create one OtpVerification
     * const OtpVerification = await prisma.otpVerification.create({
     *   data: {
     *     // ... data to create a OtpVerification
     *   }
     * })
     * 
     */
    create<T extends OtpVerificationCreateArgs>(args: SelectSubset<T, OtpVerificationCreateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpVerifications.
     * @param {OtpVerificationCreateManyArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpVerificationCreateManyArgs>(args?: SelectSubset<T, OtpVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpVerifications and returns the data saved in the database.
     * @param {OtpVerificationCreateManyAndReturnArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpVerification.
     * @param {OtpVerificationDeleteArgs} args - Arguments to delete one OtpVerification.
     * @example
     * // Delete one OtpVerification
     * const OtpVerification = await prisma.otpVerification.delete({
     *   where: {
     *     // ... filter to delete one OtpVerification
     *   }
     * })
     * 
     */
    delete<T extends OtpVerificationDeleteArgs>(args: SelectSubset<T, OtpVerificationDeleteArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpVerification.
     * @param {OtpVerificationUpdateArgs} args - Arguments to update one OtpVerification.
     * @example
     * // Update one OtpVerification
     * const otpVerification = await prisma.otpVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpVerificationUpdateArgs>(args: SelectSubset<T, OtpVerificationUpdateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpVerifications.
     * @param {OtpVerificationDeleteManyArgs} args - Arguments to filter OtpVerifications to delete.
     * @example
     * // Delete a few OtpVerifications
     * const { count } = await prisma.otpVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpVerificationDeleteManyArgs>(args?: SelectSubset<T, OtpVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpVerificationUpdateManyArgs>(args: SelectSubset<T, OtpVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications and returns the data updated in the database.
     * @param {OtpVerificationUpdateManyAndReturnArgs} args - Arguments to update many OtpVerifications.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpVerification.
     * @param {OtpVerificationUpsertArgs} args - Arguments to update or create a OtpVerification.
     * @example
     * // Update or create a OtpVerification
     * const otpVerification = await prisma.otpVerification.upsert({
     *   create: {
     *     // ... data to create a OtpVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpVerification we want to update
     *   }
     * })
     */
    upsert<T extends OtpVerificationUpsertArgs>(args: SelectSubset<T, OtpVerificationUpsertArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationCountArgs} args - Arguments to filter OtpVerifications to count.
     * @example
     * // Count the number of OtpVerifications
     * const count = await prisma.otpVerification.count({
     *   where: {
     *     // ... the filter for the OtpVerifications we want to count
     *   }
     * })
    **/
    count<T extends OtpVerificationCountArgs>(
      args?: Subset<T, OtpVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpVerificationAggregateArgs>(args: Subset<T, OtpVerificationAggregateArgs>): Prisma.PrismaPromise<GetOtpVerificationAggregateType<T>>

    /**
     * Group by OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OtpVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpVerification model
   */
  readonly fields: OtpVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtpVerification model
   */
  interface OtpVerificationFieldRefs {
    readonly id: FieldRef<"OtpVerification", 'String'>
    readonly email: FieldRef<"OtpVerification", 'String'>
    readonly code: FieldRef<"OtpVerification", 'String'>
    readonly createdAt: FieldRef<"OtpVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpVerification findUnique
   */
  export type OtpVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findUniqueOrThrow
   */
  export type OtpVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findFirst
   */
  export type OtpVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findFirstOrThrow
   */
  export type OtpVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findMany
   */
  export type OtpVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerifications to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification create
   */
  export type OtpVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a OtpVerification.
     */
    data: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
  }

  /**
   * OtpVerification createMany
   */
  export type OtpVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
  }

  /**
   * OtpVerification createManyAndReturn
   */
  export type OtpVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
  }

  /**
   * OtpVerification update
   */
  export type OtpVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a OtpVerification.
     */
    data: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
    /**
     * Choose, which OtpVerification to update.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification updateMany
   */
  export type OtpVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification updateManyAndReturn
   */
  export type OtpVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification upsert
   */
  export type OtpVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the OtpVerification to update in case it exists.
     */
    where: OtpVerificationWhereUniqueInput
    /**
     * In case the OtpVerification found by the `where` argument doesn't exist, create a new OtpVerification with this data.
     */
    create: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
    /**
     * In case the OtpVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
  }

  /**
   * OtpVerification delete
   */
  export type OtpVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter which OtpVerification to delete.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification deleteMany
   */
  export type OtpVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerifications to delete
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to delete.
     */
    limit?: number
  }

  /**
   * OtpVerification without action
   */
  export type OtpVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    college: 'college',
    domain: 'domain',
    duration: 'duration',
    linkedin: 'linkedin',
    github: 'github',
    portfolio: 'portfolio',
    resumeUrl: 'resumeUrl',
    paymentStatus: 'paymentStatus',
    amountPaid: 'amountPaid',
    paymentId: 'paymentId',
    invoiceId: 'invoiceId',
    qrCode: 'qrCode',
    offerLetterUrl: 'offerLetterUrl',
    internshipId: 'internshipId',
    status: 'status',
    rating: 'rating',
    feedback: 'feedback',
    performanceScore: 'performanceScore',
    startDate: 'startDate',
    endDate: 'endDate',
    certificateId: 'certificateId',
    certificateUrl: 'certificateUrl',
    lorUrl: 'lorUrl',
    tasksCompletedCount: 'tasksCompletedCount',
    createdAt: 'createdAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    domain: 'domain',
    dayNumber: 'dayNumber',
    resourceLinks: 'resourceLinks'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskSubmissionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    taskId: 'taskId',
    completionLink: 'completionLink',
    followTaskCheck: 'followTaskCheck',
    comment: 'comment',
    status: 'status',
    score: 'score',
    mentorFeedback: 'mentorFeedback',
    submittedAt: 'submittedAt'
  };

  export type TaskSubmissionScalarFieldEnum = (typeof TaskSubmissionScalarFieldEnum)[keyof typeof TaskSubmissionScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    content: 'content',
    readingTime: 'readingTime',
    author: 'author',
    authorImage: 'authorImage',
    bannerImage: 'bannerImage',
    published: 'published',
    createdAt: 'createdAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const ContactQueryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    service: 'service',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactQueryScalarFieldEnum = (typeof ContactQueryScalarFieldEnum)[keyof typeof ContactQueryScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    companyName: 'companyName',
    passwordHash: 'passwordHash'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientProjectScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    title: 'title',
    description: 'description',
    status: 'status',
    progress: 'progress',
    repoUrl: 'repoUrl',
    meetingLink: 'meetingLink',
    nextMilestone: 'nextMilestone',
    deadline: 'deadline',
    createdAt: 'createdAt'
  };

  export type ClientProjectScalarFieldEnum = (typeof ClientProjectScalarFieldEnum)[keyof typeof ClientProjectScalarFieldEnum]


  export const ClientInvoiceScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    invoiceNumber: 'invoiceNumber',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    pdfUrl: 'pdfUrl',
    createdAt: 'createdAt'
  };

  export type ClientInvoiceScalarFieldEnum = (typeof ClientInvoiceScalarFieldEnum)[keyof typeof ClientInvoiceScalarFieldEnum]


  export const OtpVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type OtpVerificationScalarFieldEnum = (typeof OtpVerificationScalarFieldEnum)[keyof typeof OtpVerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    college?: StringFilter<"Student"> | string
    domain?: StringFilter<"Student"> | string
    duration?: StringFilter<"Student"> | string
    linkedin?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    portfolio?: StringNullableFilter<"Student"> | string | null
    resumeUrl?: StringNullableFilter<"Student"> | string | null
    paymentStatus?: StringFilter<"Student"> | string
    amountPaid?: FloatFilter<"Student"> | number
    paymentId?: StringNullableFilter<"Student"> | string | null
    invoiceId?: StringNullableFilter<"Student"> | string | null
    qrCode?: StringNullableFilter<"Student"> | string | null
    offerLetterUrl?: StringNullableFilter<"Student"> | string | null
    internshipId?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    rating?: IntNullableFilter<"Student"> | number | null
    feedback?: StringNullableFilter<"Student"> | string | null
    performanceScore?: FloatNullableFilter<"Student"> | number | null
    startDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    certificateId?: StringNullableFilter<"Student"> | string | null
    certificateUrl?: StringNullableFilter<"Student"> | string | null
    lorUrl?: StringNullableFilter<"Student"> | string | null
    tasksCompletedCount?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    submissions?: TaskSubmissionListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    domain?: SortOrder
    duration?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    offerLetterUrl?: SortOrderInput | SortOrder
    internshipId?: SortOrderInput | SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    performanceScore?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    certificateId?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    lorUrl?: SortOrderInput | SortOrder
    tasksCompletedCount?: SortOrder
    createdAt?: SortOrder
    submissions?: TaskSubmissionOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    internshipId?: string
    certificateId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    college?: StringFilter<"Student"> | string
    domain?: StringFilter<"Student"> | string
    duration?: StringFilter<"Student"> | string
    linkedin?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    portfolio?: StringNullableFilter<"Student"> | string | null
    resumeUrl?: StringNullableFilter<"Student"> | string | null
    paymentStatus?: StringFilter<"Student"> | string
    amountPaid?: FloatFilter<"Student"> | number
    paymentId?: StringNullableFilter<"Student"> | string | null
    invoiceId?: StringNullableFilter<"Student"> | string | null
    qrCode?: StringNullableFilter<"Student"> | string | null
    offerLetterUrl?: StringNullableFilter<"Student"> | string | null
    status?: StringFilter<"Student"> | string
    rating?: IntNullableFilter<"Student"> | number | null
    feedback?: StringNullableFilter<"Student"> | string | null
    performanceScore?: FloatNullableFilter<"Student"> | number | null
    startDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    certificateUrl?: StringNullableFilter<"Student"> | string | null
    lorUrl?: StringNullableFilter<"Student"> | string | null
    tasksCompletedCount?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    submissions?: TaskSubmissionListRelationFilter
  }, "id" | "email" | "internshipId" | "certificateId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    domain?: SortOrder
    duration?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    offerLetterUrl?: SortOrderInput | SortOrder
    internshipId?: SortOrderInput | SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    performanceScore?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    certificateId?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    lorUrl?: SortOrderInput | SortOrder
    tasksCompletedCount?: SortOrder
    createdAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringWithAggregatesFilter<"Student"> | string
    college?: StringWithAggregatesFilter<"Student"> | string
    domain?: StringWithAggregatesFilter<"Student"> | string
    duration?: StringWithAggregatesFilter<"Student"> | string
    linkedin?: StringNullableWithAggregatesFilter<"Student"> | string | null
    github?: StringNullableWithAggregatesFilter<"Student"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"Student"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Student"> | string
    amountPaid?: FloatWithAggregatesFilter<"Student"> | number
    paymentId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Student"> | string | null
    offerLetterUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    internshipId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    status?: StringWithAggregatesFilter<"Student"> | string
    rating?: IntNullableWithAggregatesFilter<"Student"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Student"> | string | null
    performanceScore?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    certificateId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    certificateUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    lorUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    tasksCompletedCount?: IntWithAggregatesFilter<"Student"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    domain?: StringFilter<"Task"> | string
    dayNumber?: IntFilter<"Task"> | number
    resourceLinks?: StringNullableFilter<"Task"> | string | null
    submissions?: TaskSubmissionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    dayNumber?: SortOrder
    resourceLinks?: SortOrderInput | SortOrder
    submissions?: TaskSubmissionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    domain?: StringFilter<"Task"> | string
    dayNumber?: IntFilter<"Task"> | number
    resourceLinks?: StringNullableFilter<"Task"> | string | null
    submissions?: TaskSubmissionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    dayNumber?: SortOrder
    resourceLinks?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    domain?: StringWithAggregatesFilter<"Task"> | string
    dayNumber?: IntWithAggregatesFilter<"Task"> | number
    resourceLinks?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type TaskSubmissionWhereInput = {
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    studentId?: StringFilter<"TaskSubmission"> | string
    taskId?: StringFilter<"TaskSubmission"> | string
    completionLink?: StringFilter<"TaskSubmission"> | string
    followTaskCheck?: BoolFilter<"TaskSubmission"> | boolean
    comment?: StringNullableFilter<"TaskSubmission"> | string | null
    status?: StringFilter<"TaskSubmission"> | string
    score?: FloatNullableFilter<"TaskSubmission"> | number | null
    mentorFeedback?: StringNullableFilter<"TaskSubmission"> | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    taskId?: SortOrder
    completionLink?: SortOrder
    followTaskCheck?: SortOrder
    comment?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    mentorFeedback?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type TaskSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    studentId?: StringFilter<"TaskSubmission"> | string
    taskId?: StringFilter<"TaskSubmission"> | string
    completionLink?: StringFilter<"TaskSubmission"> | string
    followTaskCheck?: BoolFilter<"TaskSubmission"> | boolean
    comment?: StringNullableFilter<"TaskSubmission"> | string | null
    status?: StringFilter<"TaskSubmission"> | string
    score?: FloatNullableFilter<"TaskSubmission"> | number | null
    mentorFeedback?: StringNullableFilter<"TaskSubmission"> | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    taskId?: SortOrder
    completionLink?: SortOrder
    followTaskCheck?: SortOrder
    comment?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    mentorFeedback?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    _count?: TaskSubmissionCountOrderByAggregateInput
    _avg?: TaskSubmissionAvgOrderByAggregateInput
    _max?: TaskSubmissionMaxOrderByAggregateInput
    _min?: TaskSubmissionMinOrderByAggregateInput
    _sum?: TaskSubmissionSumOrderByAggregateInput
  }

  export type TaskSubmissionScalarWhereWithAggregatesInput = {
    AND?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    OR?: TaskSubmissionScalarWhereWithAggregatesInput[]
    NOT?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskSubmission"> | string
    studentId?: StringWithAggregatesFilter<"TaskSubmission"> | string
    taskId?: StringWithAggregatesFilter<"TaskSubmission"> | string
    completionLink?: StringWithAggregatesFilter<"TaskSubmission"> | string
    followTaskCheck?: BoolWithAggregatesFilter<"TaskSubmission"> | boolean
    comment?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    status?: StringWithAggregatesFilter<"TaskSubmission"> | string
    score?: FloatNullableWithAggregatesFilter<"TaskSubmission"> | number | null
    mentorFeedback?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"TaskSubmission"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    readingTime?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    authorImage?: StringNullableFilter<"Blog"> | string | null
    bannerImage?: StringNullableFilter<"Blog"> | string | null
    published?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    author?: SortOrder
    authorImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    readingTime?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    authorImage?: StringNullableFilter<"Blog"> | string | null
    bannerImage?: StringNullableFilter<"Blog"> | string | null
    published?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    author?: SortOrder
    authorImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    category?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    readingTime?: StringWithAggregatesFilter<"Blog"> | string
    author?: StringWithAggregatesFilter<"Blog"> | string
    authorImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    bannerImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    published?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type ContactQueryWhereInput = {
    AND?: ContactQueryWhereInput | ContactQueryWhereInput[]
    OR?: ContactQueryWhereInput[]
    NOT?: ContactQueryWhereInput | ContactQueryWhereInput[]
    id?: StringFilter<"ContactQuery"> | string
    name?: StringFilter<"ContactQuery"> | string
    email?: StringFilter<"ContactQuery"> | string
    service?: StringNullableFilter<"ContactQuery"> | string | null
    message?: StringFilter<"ContactQuery"> | string
    status?: StringFilter<"ContactQuery"> | string
    createdAt?: DateTimeFilter<"ContactQuery"> | Date | string
  }

  export type ContactQueryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    service?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactQueryWhereInput | ContactQueryWhereInput[]
    OR?: ContactQueryWhereInput[]
    NOT?: ContactQueryWhereInput | ContactQueryWhereInput[]
    name?: StringFilter<"ContactQuery"> | string
    email?: StringFilter<"ContactQuery"> | string
    service?: StringNullableFilter<"ContactQuery"> | string | null
    message?: StringFilter<"ContactQuery"> | string
    status?: StringFilter<"ContactQuery"> | string
    createdAt?: DateTimeFilter<"ContactQuery"> | Date | string
  }, "id">

  export type ContactQueryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    service?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactQueryCountOrderByAggregateInput
    _max?: ContactQueryMaxOrderByAggregateInput
    _min?: ContactQueryMinOrderByAggregateInput
  }

  export type ContactQueryScalarWhereWithAggregatesInput = {
    AND?: ContactQueryScalarWhereWithAggregatesInput | ContactQueryScalarWhereWithAggregatesInput[]
    OR?: ContactQueryScalarWhereWithAggregatesInput[]
    NOT?: ContactQueryScalarWhereWithAggregatesInput | ContactQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactQuery"> | string
    name?: StringWithAggregatesFilter<"ContactQuery"> | string
    email?: StringWithAggregatesFilter<"ContactQuery"> | string
    service?: StringNullableWithAggregatesFilter<"ContactQuery"> | string | null
    message?: StringWithAggregatesFilter<"ContactQuery"> | string
    status?: StringWithAggregatesFilter<"ContactQuery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactQuery"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    passwordHash?: StringFilter<"Client"> | string
    projects?: ClientProjectListRelationFilter
    invoices?: ClientInvoiceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    projects?: ClientProjectOrderByRelationAggregateInput
    invoices?: ClientInvoiceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    passwordHash?: StringFilter<"Client"> | string
    projects?: ClientProjectListRelationFilter
    invoices?: ClientInvoiceListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Client"> | string
  }

  export type ClientProjectWhereInput = {
    AND?: ClientProjectWhereInput | ClientProjectWhereInput[]
    OR?: ClientProjectWhereInput[]
    NOT?: ClientProjectWhereInput | ClientProjectWhereInput[]
    id?: StringFilter<"ClientProject"> | string
    clientId?: StringFilter<"ClientProject"> | string
    title?: StringFilter<"ClientProject"> | string
    description?: StringFilter<"ClientProject"> | string
    status?: StringFilter<"ClientProject"> | string
    progress?: FloatFilter<"ClientProject"> | number
    repoUrl?: StringNullableFilter<"ClientProject"> | string | null
    meetingLink?: StringNullableFilter<"ClientProject"> | string | null
    nextMilestone?: StringNullableFilter<"ClientProject"> | string | null
    deadline?: DateTimeNullableFilter<"ClientProject"> | Date | string | null
    createdAt?: DateTimeFilter<"ClientProject"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ClientProjectOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    repoUrl?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    nextMilestone?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ClientProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientProjectWhereInput | ClientProjectWhereInput[]
    OR?: ClientProjectWhereInput[]
    NOT?: ClientProjectWhereInput | ClientProjectWhereInput[]
    clientId?: StringFilter<"ClientProject"> | string
    title?: StringFilter<"ClientProject"> | string
    description?: StringFilter<"ClientProject"> | string
    status?: StringFilter<"ClientProject"> | string
    progress?: FloatFilter<"ClientProject"> | number
    repoUrl?: StringNullableFilter<"ClientProject"> | string | null
    meetingLink?: StringNullableFilter<"ClientProject"> | string | null
    nextMilestone?: StringNullableFilter<"ClientProject"> | string | null
    deadline?: DateTimeNullableFilter<"ClientProject"> | Date | string | null
    createdAt?: DateTimeFilter<"ClientProject"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type ClientProjectOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    repoUrl?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    nextMilestone?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientProjectCountOrderByAggregateInput
    _avg?: ClientProjectAvgOrderByAggregateInput
    _max?: ClientProjectMaxOrderByAggregateInput
    _min?: ClientProjectMinOrderByAggregateInput
    _sum?: ClientProjectSumOrderByAggregateInput
  }

  export type ClientProjectScalarWhereWithAggregatesInput = {
    AND?: ClientProjectScalarWhereWithAggregatesInput | ClientProjectScalarWhereWithAggregatesInput[]
    OR?: ClientProjectScalarWhereWithAggregatesInput[]
    NOT?: ClientProjectScalarWhereWithAggregatesInput | ClientProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientProject"> | string
    clientId?: StringWithAggregatesFilter<"ClientProject"> | string
    title?: StringWithAggregatesFilter<"ClientProject"> | string
    description?: StringWithAggregatesFilter<"ClientProject"> | string
    status?: StringWithAggregatesFilter<"ClientProject"> | string
    progress?: FloatWithAggregatesFilter<"ClientProject"> | number
    repoUrl?: StringNullableWithAggregatesFilter<"ClientProject"> | string | null
    meetingLink?: StringNullableWithAggregatesFilter<"ClientProject"> | string | null
    nextMilestone?: StringNullableWithAggregatesFilter<"ClientProject"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"ClientProject"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientProject"> | Date | string
  }

  export type ClientInvoiceWhereInput = {
    AND?: ClientInvoiceWhereInput | ClientInvoiceWhereInput[]
    OR?: ClientInvoiceWhereInput[]
    NOT?: ClientInvoiceWhereInput | ClientInvoiceWhereInput[]
    id?: StringFilter<"ClientInvoice"> | string
    clientId?: StringFilter<"ClientInvoice"> | string
    invoiceNumber?: StringFilter<"ClientInvoice"> | string
    amount?: FloatFilter<"ClientInvoice"> | number
    dueDate?: DateTimeFilter<"ClientInvoice"> | Date | string
    status?: StringFilter<"ClientInvoice"> | string
    pdfUrl?: StringNullableFilter<"ClientInvoice"> | string | null
    createdAt?: DateTimeFilter<"ClientInvoice"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ClientInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ClientInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: ClientInvoiceWhereInput | ClientInvoiceWhereInput[]
    OR?: ClientInvoiceWhereInput[]
    NOT?: ClientInvoiceWhereInput | ClientInvoiceWhereInput[]
    clientId?: StringFilter<"ClientInvoice"> | string
    amount?: FloatFilter<"ClientInvoice"> | number
    dueDate?: DateTimeFilter<"ClientInvoice"> | Date | string
    status?: StringFilter<"ClientInvoice"> | string
    pdfUrl?: StringNullableFilter<"ClientInvoice"> | string | null
    createdAt?: DateTimeFilter<"ClientInvoice"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "invoiceNumber">

  export type ClientInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientInvoiceCountOrderByAggregateInput
    _avg?: ClientInvoiceAvgOrderByAggregateInput
    _max?: ClientInvoiceMaxOrderByAggregateInput
    _min?: ClientInvoiceMinOrderByAggregateInput
    _sum?: ClientInvoiceSumOrderByAggregateInput
  }

  export type ClientInvoiceScalarWhereWithAggregatesInput = {
    AND?: ClientInvoiceScalarWhereWithAggregatesInput | ClientInvoiceScalarWhereWithAggregatesInput[]
    OR?: ClientInvoiceScalarWhereWithAggregatesInput[]
    NOT?: ClientInvoiceScalarWhereWithAggregatesInput | ClientInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientInvoice"> | string
    clientId?: StringWithAggregatesFilter<"ClientInvoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"ClientInvoice"> | string
    amount?: FloatWithAggregatesFilter<"ClientInvoice"> | number
    dueDate?: DateTimeWithAggregatesFilter<"ClientInvoice"> | Date | string
    status?: StringWithAggregatesFilter<"ClientInvoice"> | string
    pdfUrl?: StringNullableWithAggregatesFilter<"ClientInvoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientInvoice"> | Date | string
  }

  export type OtpVerificationWhereInput = {
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    id?: StringFilter<"OtpVerification"> | string
    email?: StringFilter<"OtpVerification"> | string
    code?: StringFilter<"OtpVerification"> | string
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }

  export type OtpVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    code?: StringFilter<"OtpVerification"> | string
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }, "id" | "email">

  export type OtpVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: OtpVerificationCountOrderByAggregateInput
    _max?: OtpVerificationMaxOrderByAggregateInput
    _min?: OtpVerificationMinOrderByAggregateInput
  }

  export type OtpVerificationScalarWhereWithAggregatesInput = {
    AND?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    OR?: OtpVerificationScalarWhereWithAggregatesInput[]
    NOT?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpVerification"> | string
    email?: StringWithAggregatesFilter<"OtpVerification"> | string
    code?: StringWithAggregatesFilter<"OtpVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    resumeUrl?: string | null
    paymentStatus?: string
    amountPaid?: number
    paymentId?: string | null
    invoiceId?: string | null
    qrCode?: string | null
    offerLetterUrl?: string | null
    internshipId?: string | null
    status?: string
    rating?: number | null
    feedback?: string | null
    performanceScore?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    certificateId?: string | null
    certificateUrl?: string | null
    lorUrl?: string | null
    tasksCompletedCount?: number
    createdAt?: Date | string
    submissions?: TaskSubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    resumeUrl?: string | null
    paymentStatus?: string
    amountPaid?: number
    paymentId?: string | null
    invoiceId?: string | null
    qrCode?: string | null
    offerLetterUrl?: string | null
    internshipId?: string | null
    status?: string
    rating?: number | null
    feedback?: string | null
    performanceScore?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    certificateId?: string | null
    certificateUrl?: string | null
    lorUrl?: string | null
    tasksCompletedCount?: number
    createdAt?: Date | string
    submissions?: TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TaskSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    resumeUrl?: string | null
    paymentStatus?: string
    amountPaid?: number
    paymentId?: string | null
    invoiceId?: string | null
    qrCode?: string | null
    offerLetterUrl?: string | null
    internshipId?: string | null
    status?: string
    rating?: number | null
    feedback?: string | null
    performanceScore?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    certificateId?: string | null
    certificateUrl?: string | null
    lorUrl?: string | null
    tasksCompletedCount?: number
    createdAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks?: string | null
    submissions?: TaskSubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks?: string | null
    submissions?: TaskSubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: TaskSubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: TaskSubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskSubmissionCreateInput = {
    id?: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionsInput
    task: TaskCreateNestedOneWithoutSubmissionsInput
  }

  export type TaskSubmissionUncheckedCreateInput = {
    id?: string
    studentId: string
    taskId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TaskSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateManyInput = {
    id?: string
    studentId: string
    taskId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    content: string
    readingTime: string
    author?: string
    authorImage?: string | null
    bannerImage?: string | null
    published?: boolean
    createdAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    content: string
    readingTime: string
    author?: string
    authorImage?: string | null
    bannerImage?: string | null
    published?: boolean
    createdAt?: Date | string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    category: string
    content: string
    readingTime: string
    author?: string
    authorImage?: string | null
    bannerImage?: string | null
    published?: boolean
    createdAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactQueryCreateInput = {
    id?: string
    name: string
    email: string
    service?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactQueryUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    service?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    service?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    service?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactQueryCreateManyInput = {
    id?: string
    name: string
    email: string
    service?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    service?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    service?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    projects?: ClientProjectCreateNestedManyWithoutClientInput
    invoices?: ClientInvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    projects?: ClientProjectUncheckedCreateNestedManyWithoutClientInput
    invoices?: ClientInvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    projects?: ClientProjectUpdateManyWithoutClientNestedInput
    invoices?: ClientInvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    projects?: ClientProjectUncheckedUpdateManyWithoutClientNestedInput
    invoices?: ClientInvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type ClientProjectCreateInput = {
    id?: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
  }

  export type ClientProjectUncheckedCreateInput = {
    id?: string
    clientId: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ClientProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProjectCreateManyInput = {
    id?: string
    clientId: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutInvoicesInput
  }

  export type ClientInvoiceUncheckedCreateInput = {
    id?: string
    clientId: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type ClientInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type ClientInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceCreateManyInput = {
    id?: string
    clientId: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type ClientInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type OtpVerificationUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateManyInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskSubmissionListRelationFilter = {
    every?: TaskSubmissionWhereInput
    some?: TaskSubmissionWhereInput
    none?: TaskSubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    domain?: SortOrder
    duration?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumeUrl?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    qrCode?: SortOrder
    offerLetterUrl?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    performanceScore?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateId?: SortOrder
    certificateUrl?: SortOrder
    lorUrl?: SortOrder
    tasksCompletedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
    rating?: SortOrder
    performanceScore?: SortOrder
    tasksCompletedCount?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    domain?: SortOrder
    duration?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumeUrl?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    qrCode?: SortOrder
    offerLetterUrl?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    performanceScore?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateId?: SortOrder
    certificateUrl?: SortOrder
    lorUrl?: SortOrder
    tasksCompletedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    domain?: SortOrder
    duration?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumeUrl?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    paymentId?: SortOrder
    invoiceId?: SortOrder
    qrCode?: SortOrder
    offerLetterUrl?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    performanceScore?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateId?: SortOrder
    certificateUrl?: SortOrder
    lorUrl?: SortOrder
    tasksCompletedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    amountPaid?: SortOrder
    rating?: SortOrder
    performanceScore?: SortOrder
    tasksCompletedCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    dayNumber?: SortOrder
    resourceLinks?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    dayNumber?: SortOrder
    resourceLinks?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    dayNumber?: SortOrder
    resourceLinks?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    taskId?: SortOrder
    completionLink?: SortOrder
    followTaskCheck?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type TaskSubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TaskSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    taskId?: SortOrder
    completionLink?: SortOrder
    followTaskCheck?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type TaskSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    taskId?: SortOrder
    completionLink?: SortOrder
    followTaskCheck?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type TaskSubmissionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    author?: SortOrder
    authorImage?: SortOrder
    bannerImage?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    author?: SortOrder
    authorImage?: SortOrder
    bannerImage?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    author?: SortOrder
    authorImage?: SortOrder
    bannerImage?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactQueryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactQueryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientProjectListRelationFilter = {
    every?: ClientProjectWhereInput
    some?: ClientProjectWhereInput
    none?: ClientProjectWhereInput
  }

  export type ClientInvoiceListRelationFilter = {
    every?: ClientInvoiceWhereInput
    some?: ClientInvoiceWhereInput
    none?: ClientInvoiceWhereInput
  }

  export type ClientProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    passwordHash?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    passwordHash?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    passwordHash?: SortOrder
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ClientProjectCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    repoUrl?: SortOrder
    meetingLink?: SortOrder
    nextMilestone?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientProjectAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ClientProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    repoUrl?: SortOrder
    meetingLink?: SortOrder
    nextMilestone?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientProjectMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    repoUrl?: SortOrder
    meetingLink?: SortOrder
    nextMilestone?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientProjectSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ClientInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ClientInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OtpVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput | TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput | TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutStudentInput | TaskSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput | TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput | TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutStudentInput | TaskSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type TaskSubmissionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type TaskSubmissionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput | TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput | TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutTaskInput | TaskSubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput | TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput | TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutTaskInput | TaskSubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    upsert?: StudentUpsertWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubmissionsInput, StudentUpdateWithoutSubmissionsInput>, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TaskUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    upsert?: TaskUpsertWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubmissionsInput, TaskUpdateWithoutSubmissionsInput>, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ClientProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput> | ClientProjectCreateWithoutClientInput[] | ClientProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProjectCreateOrConnectWithoutClientInput | ClientProjectCreateOrConnectWithoutClientInput[]
    createMany?: ClientProjectCreateManyClientInputEnvelope
    connect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
  }

  export type ClientInvoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput> | ClientInvoiceCreateWithoutClientInput[] | ClientInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInvoiceCreateOrConnectWithoutClientInput | ClientInvoiceCreateOrConnectWithoutClientInput[]
    createMany?: ClientInvoiceCreateManyClientInputEnvelope
    connect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
  }

  export type ClientProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput> | ClientProjectCreateWithoutClientInput[] | ClientProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProjectCreateOrConnectWithoutClientInput | ClientProjectCreateOrConnectWithoutClientInput[]
    createMany?: ClientProjectCreateManyClientInputEnvelope
    connect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
  }

  export type ClientInvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput> | ClientInvoiceCreateWithoutClientInput[] | ClientInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInvoiceCreateOrConnectWithoutClientInput | ClientInvoiceCreateOrConnectWithoutClientInput[]
    createMany?: ClientInvoiceCreateManyClientInputEnvelope
    connect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
  }

  export type ClientProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput> | ClientProjectCreateWithoutClientInput[] | ClientProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProjectCreateOrConnectWithoutClientInput | ClientProjectCreateOrConnectWithoutClientInput[]
    upsert?: ClientProjectUpsertWithWhereUniqueWithoutClientInput | ClientProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProjectCreateManyClientInputEnvelope
    set?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    disconnect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    delete?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    connect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    update?: ClientProjectUpdateWithWhereUniqueWithoutClientInput | ClientProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProjectUpdateManyWithWhereWithoutClientInput | ClientProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProjectScalarWhereInput | ClientProjectScalarWhereInput[]
  }

  export type ClientInvoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput> | ClientInvoiceCreateWithoutClientInput[] | ClientInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInvoiceCreateOrConnectWithoutClientInput | ClientInvoiceCreateOrConnectWithoutClientInput[]
    upsert?: ClientInvoiceUpsertWithWhereUniqueWithoutClientInput | ClientInvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientInvoiceCreateManyClientInputEnvelope
    set?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    disconnect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    delete?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    connect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    update?: ClientInvoiceUpdateWithWhereUniqueWithoutClientInput | ClientInvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientInvoiceUpdateManyWithWhereWithoutClientInput | ClientInvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientInvoiceScalarWhereInput | ClientInvoiceScalarWhereInput[]
  }

  export type ClientProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput> | ClientProjectCreateWithoutClientInput[] | ClientProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProjectCreateOrConnectWithoutClientInput | ClientProjectCreateOrConnectWithoutClientInput[]
    upsert?: ClientProjectUpsertWithWhereUniqueWithoutClientInput | ClientProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProjectCreateManyClientInputEnvelope
    set?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    disconnect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    delete?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    connect?: ClientProjectWhereUniqueInput | ClientProjectWhereUniqueInput[]
    update?: ClientProjectUpdateWithWhereUniqueWithoutClientInput | ClientProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProjectUpdateManyWithWhereWithoutClientInput | ClientProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProjectScalarWhereInput | ClientProjectScalarWhereInput[]
  }

  export type ClientInvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput> | ClientInvoiceCreateWithoutClientInput[] | ClientInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInvoiceCreateOrConnectWithoutClientInput | ClientInvoiceCreateOrConnectWithoutClientInput[]
    upsert?: ClientInvoiceUpsertWithWhereUniqueWithoutClientInput | ClientInvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientInvoiceCreateManyClientInputEnvelope
    set?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    disconnect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    delete?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    connect?: ClientInvoiceWhereUniqueInput | ClientInvoiceWhereUniqueInput[]
    update?: ClientInvoiceUpdateWithWhereUniqueWithoutClientInput | ClientInvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientInvoiceUpdateManyWithWhereWithoutClientInput | ClientInvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientInvoiceScalarWhereInput | ClientInvoiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    upsert?: ClientUpsertWithoutProjectsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProjectsInput, ClientUpdateWithoutProjectsInput>, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ClientCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    upsert?: ClientUpsertWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutInvoicesInput, ClientUpdateWithoutInvoicesInput>, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskSubmissionCreateWithoutStudentInput = {
    id?: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubmissionsInput
  }

  export type TaskSubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    taskId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionCreateOrConnectWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    create: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TaskSubmissionCreateManyStudentInputEnvelope = {
    data: TaskSubmissionCreateManyStudentInput | TaskSubmissionCreateManyStudentInput[]
  }

  export type TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    update: XOR<TaskSubmissionUpdateWithoutStudentInput, TaskSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    data: XOR<TaskSubmissionUpdateWithoutStudentInput, TaskSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type TaskSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: TaskSubmissionScalarWhereInput
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type TaskSubmissionScalarWhereInput = {
    AND?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    OR?: TaskSubmissionScalarWhereInput[]
    NOT?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    studentId?: StringFilter<"TaskSubmission"> | string
    taskId?: StringFilter<"TaskSubmission"> | string
    completionLink?: StringFilter<"TaskSubmission"> | string
    followTaskCheck?: BoolFilter<"TaskSubmission"> | boolean
    comment?: StringNullableFilter<"TaskSubmission"> | string | null
    status?: StringFilter<"TaskSubmission"> | string
    score?: FloatNullableFilter<"TaskSubmission"> | number | null
    mentorFeedback?: StringNullableFilter<"TaskSubmission"> | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
  }

  export type TaskSubmissionCreateWithoutTaskInput = {
    id?: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionsInput
  }

  export type TaskSubmissionUncheckedCreateWithoutTaskInput = {
    id?: string
    studentId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionCreateOrConnectWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    create: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSubmissionCreateManyTaskInputEnvelope = {
    data: TaskSubmissionCreateManyTaskInput | TaskSubmissionCreateManyTaskInput[]
  }

  export type TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    update: XOR<TaskSubmissionUpdateWithoutTaskInput, TaskSubmissionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    data: XOR<TaskSubmissionUpdateWithoutTaskInput, TaskSubmissionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskSubmissionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskSubmissionScalarWhereInput
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyWithoutTaskInput>
  }

  export type StudentCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    resumeUrl?: string | null
    paymentStatus?: string
    amountPaid?: number
    paymentId?: string | null
    invoiceId?: string | null
    qrCode?: string | null
    offerLetterUrl?: string | null
    internshipId?: string | null
    status?: string
    rating?: number | null
    feedback?: string | null
    performanceScore?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    certificateId?: string | null
    certificateUrl?: string | null
    lorUrl?: string | null
    tasksCompletedCount?: number
    createdAt?: Date | string
  }

  export type StudentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    college: string
    domain: string
    duration: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    resumeUrl?: string | null
    paymentStatus?: string
    amountPaid?: number
    paymentId?: string | null
    invoiceId?: string | null
    qrCode?: string | null
    offerLetterUrl?: string | null
    internshipId?: string | null
    status?: string
    rating?: number | null
    feedback?: string | null
    performanceScore?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    certificateId?: string | null
    certificateUrl?: string | null
    lorUrl?: string | null
    tasksCompletedCount?: number
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutSubmissionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
  }

  export type TaskCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks?: string | null
  }

  export type TaskUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    domain: string
    dayNumber: number
    resourceLinks?: string | null
  }

  export type TaskCreateOrConnectWithoutSubmissionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
  }

  export type StudentUpsertWithoutSubmissionsInput = {
    update: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    offerLetterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    internshipId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateId?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tasksCompletedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithoutSubmissionsInput = {
    update: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TaskUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    resourceLinks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientProjectCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientProjectUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientProjectCreateOrConnectWithoutClientInput = {
    where: ClientProjectWhereUniqueInput
    create: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput>
  }

  export type ClientProjectCreateManyClientInputEnvelope = {
    data: ClientProjectCreateManyClientInput | ClientProjectCreateManyClientInput[]
  }

  export type ClientInvoiceCreateWithoutClientInput = {
    id?: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type ClientInvoiceUncheckedCreateWithoutClientInput = {
    id?: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type ClientInvoiceCreateOrConnectWithoutClientInput = {
    where: ClientInvoiceWhereUniqueInput
    create: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput>
  }

  export type ClientInvoiceCreateManyClientInputEnvelope = {
    data: ClientInvoiceCreateManyClientInput | ClientInvoiceCreateManyClientInput[]
  }

  export type ClientProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientProjectWhereUniqueInput
    update: XOR<ClientProjectUpdateWithoutClientInput, ClientProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ClientProjectCreateWithoutClientInput, ClientProjectUncheckedCreateWithoutClientInput>
  }

  export type ClientProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientProjectWhereUniqueInput
    data: XOR<ClientProjectUpdateWithoutClientInput, ClientProjectUncheckedUpdateWithoutClientInput>
  }

  export type ClientProjectUpdateManyWithWhereWithoutClientInput = {
    where: ClientProjectScalarWhereInput
    data: XOR<ClientProjectUpdateManyMutationInput, ClientProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientProjectScalarWhereInput = {
    AND?: ClientProjectScalarWhereInput | ClientProjectScalarWhereInput[]
    OR?: ClientProjectScalarWhereInput[]
    NOT?: ClientProjectScalarWhereInput | ClientProjectScalarWhereInput[]
    id?: StringFilter<"ClientProject"> | string
    clientId?: StringFilter<"ClientProject"> | string
    title?: StringFilter<"ClientProject"> | string
    description?: StringFilter<"ClientProject"> | string
    status?: StringFilter<"ClientProject"> | string
    progress?: FloatFilter<"ClientProject"> | number
    repoUrl?: StringNullableFilter<"ClientProject"> | string | null
    meetingLink?: StringNullableFilter<"ClientProject"> | string | null
    nextMilestone?: StringNullableFilter<"ClientProject"> | string | null
    deadline?: DateTimeNullableFilter<"ClientProject"> | Date | string | null
    createdAt?: DateTimeFilter<"ClientProject"> | Date | string
  }

  export type ClientInvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientInvoiceWhereUniqueInput
    update: XOR<ClientInvoiceUpdateWithoutClientInput, ClientInvoiceUncheckedUpdateWithoutClientInput>
    create: XOR<ClientInvoiceCreateWithoutClientInput, ClientInvoiceUncheckedCreateWithoutClientInput>
  }

  export type ClientInvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientInvoiceWhereUniqueInput
    data: XOR<ClientInvoiceUpdateWithoutClientInput, ClientInvoiceUncheckedUpdateWithoutClientInput>
  }

  export type ClientInvoiceUpdateManyWithWhereWithoutClientInput = {
    where: ClientInvoiceScalarWhereInput
    data: XOR<ClientInvoiceUpdateManyMutationInput, ClientInvoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientInvoiceScalarWhereInput = {
    AND?: ClientInvoiceScalarWhereInput | ClientInvoiceScalarWhereInput[]
    OR?: ClientInvoiceScalarWhereInput[]
    NOT?: ClientInvoiceScalarWhereInput | ClientInvoiceScalarWhereInput[]
    id?: StringFilter<"ClientInvoice"> | string
    clientId?: StringFilter<"ClientInvoice"> | string
    invoiceNumber?: StringFilter<"ClientInvoice"> | string
    amount?: FloatFilter<"ClientInvoice"> | number
    dueDate?: DateTimeFilter<"ClientInvoice"> | Date | string
    status?: StringFilter<"ClientInvoice"> | string
    pdfUrl?: StringNullableFilter<"ClientInvoice"> | string | null
    createdAt?: DateTimeFilter<"ClientInvoice"> | Date | string
  }

  export type ClientCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    invoices?: ClientInvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    invoices?: ClientInvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutProjectsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
  }

  export type ClientUpsertWithoutProjectsInput = {
    update: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ClientUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    invoices?: ClientInvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    invoices?: ClientInvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    projects?: ClientProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    companyName?: string | null
    passwordHash?: string
    projects?: ClientProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutInvoicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
  }

  export type ClientUpsertWithoutInvoicesInput = {
    update: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    projects?: ClientProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    projects?: ClientProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TaskSubmissionCreateManyStudentInput = {
    id?: string
    taskId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TaskSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateManyTaskInput = {
    id?: string
    studentId: string
    completionLink: string
    followTaskCheck?: boolean
    comment?: string | null
    status?: string
    score?: number | null
    mentorFeedback?: string | null
    submittedAt?: Date | string
  }

  export type TaskSubmissionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TaskSubmissionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionLink?: StringFieldUpdateOperationsInput | string
    followTaskCheck?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProjectCreateManyClientInput = {
    id?: string
    title: string
    description: string
    status?: string
    progress?: number
    repoUrl?: string | null
    meetingLink?: string | null
    nextMilestone?: string | null
    deadline?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientInvoiceCreateManyClientInput = {
    id?: string
    invoiceNumber: string
    amount: number
    dueDate: Date | string
    status?: string
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type ClientProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    nextMilestone?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInvoiceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}