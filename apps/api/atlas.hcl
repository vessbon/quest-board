locals {
    db_user = getenv("POSTGRES_USER")
    db_pass = urlescape(getenv("POSTGRES_PASSWORD"))
}

env "local" {
  url = "postgres://${local.db_user}:${local.db_pass}@localhost:5432/questboard?search_path=public&sslmode=disable"
  dev = "docker://postgres/18/dev?search_path=public"
  src = "file://db/schema.sql"
}
