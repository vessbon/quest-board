variable "envfile" {
    type    = string
    default = "./.env"
}

locals {
  envfile = {
    for line in split("\n", file(var.envfile)): split("=", line)[0] => regex("=(.*)", line)[0]
    if !startswith(line, "#") && length(split("=", line)) > 1
  }
}

env "local" {
  url  = local.envfile["DATABASE_URL"]
  dev = "docker://postgres/18/dev?search_path=public"
  src = "file://db/schema.sql"
}