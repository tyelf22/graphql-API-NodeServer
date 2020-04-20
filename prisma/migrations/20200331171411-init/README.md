# Migration `20200331171411-init`

This migration has been generated by tyson at 3/31/2020, 5:14:11 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Player" (
    "age" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "firstname" text  NOT NULL DEFAULT '',
    "height" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "lastname" text  NOT NULL DEFAULT '',
    "team" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "weight" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200331171411-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:docker@localhost:5432/pg-docker?schema=public"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Player {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  firstname String
+  lastname  String
+  team      String
+  height    String
+  weight    String
+  age       String
+}
```

