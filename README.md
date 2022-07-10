

To start this Project:

1) start docker
2) direct to folder "tierlexikon-api-main"
3) enter command: " docker build --no-cache -t tierlexikon-backend-api:latest . "
4) enter command: "$ docker run -e DATABASE_URL="file:./dev.db" -p 28785:28785 tierlexikon-backend-api:latest"
5) open the Website index.html in an Browser

The SQL Migration is implemented via Prisma automatically.

