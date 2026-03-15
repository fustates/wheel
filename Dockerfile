FROM node:24-alpine 

WORKDIR /wheel

COPY public/ /wheel/public
COPY src/ /wheel/src
COPY package.json /wheel/package.json

RUN pnpm install

CMD ["pnpm", "run", "build"]
