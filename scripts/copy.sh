# rm -rf src-bot-kit/ && \
mkdir -p src-bot-kit && \
rsync -apPh --del ../lskjs-bot-kit/packages/app/package.json src-bot-kit/ && \
rsync -apPh --del ../lskjs-bot-kit/packages/app/node_modules/ src-bot-kit/node_modules && \
rsync -apPh --del ../lskjs-bot-kit/packages/app/src/ src-bot-kit/src]