CONTAINER=$(shell docker ps --all --quiet --filter ancestor=$(IMAGE):$(VERSION))
IMAGE=webapp
PORT=80
VERSION=0.0.1

build:
	docker build --tag webapp:latest --tag webapp:$(VERSION) .

clean:
	docker rm --force $(CONTAINER)

run:
	docker run --publish $(PORT):80 webapp:$(VERSION)

serve:
	docker-compose up

stop:
	docker stop $(CONTAINER)
