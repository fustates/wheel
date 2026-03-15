FROM node:24-alpine 

WORKDIR /wheel

# 启用 corepack 以使用 pnpm（Node.js 内置）
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY public/ /wheel/public
COPY src/ /wheel/src
COPY package.json /wheel/package.json

RUN pnpm install

CMD ["pnpm", "run", "build"]
