#!/bin/bash
set -e

cd /var/www/TwoBird

echo "=== 拉取最新代码 ==="
git pull

echo "=== 重新构建并启动 ==="
docker compose down
docker compose up -d --build

echo ""
echo "=== 容器状态 ==="
docker compose ps

echo ""
echo "=== 最近日志 ==="
docker compose logs --tail=10

echo ""
echo "========================================="
echo "  访问地址: http://twobird.hhhhz.online"
echo "========================================="
