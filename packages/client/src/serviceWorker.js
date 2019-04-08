"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(
  window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" || // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", function() {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function() {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://bit.ly/CRA-PWA"
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(function(registration) {
      registration.onupdatefound = function() {
        var installingWorker = registration.installing;

        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = function() {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://bit.ly/CRA-PWA."
              ); // Execute callback

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log("Content is cached for offline use."); // Execute callback

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(function(error) {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(function(response) {
      // Ensure service worker exists, and that we really are getting a JS file.
      var contentType = response.headers.get("content-type");

      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(function(registration) {
          registration.unregister().then(function() {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(function() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.unregister();
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ByZXNyYy9zZXJ2aWNlV29ya2VyLmpzIl0sIm5hbWVzIjpbImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYXRjaCIsInJlZ2lzdGVyIiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibmF2aWdhdG9yIiwicHVibGljVXJsIiwiVVJMIiwiUFVCTElDX1VSTCIsImhyZWYiLCJvcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3dVcmwiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJWYWxpZFNXIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsInN0YXRlIiwiY29udHJvbGxlciIsIm9uVXBkYXRlIiwib25TdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImZldGNoIiwicmVzcG9uc2UiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJzdGF0dXMiLCJpbmRleE9mIiwidW5yZWdpc3RlciIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUN6QkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixXQUE3QixJQUNFO0FBQ0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsT0FGL0IsSUFHRTtBQUNBRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUNFLHdEQURGLENBTHVCLENBQTNCOztBQVVPLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQy9CLE1BQUlDLE9BQU8s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Q0FBQ0ksTUFBVCxLQUFvQixHQUFwQixJQUNDSCxXQUFXLElBQUksSUFBZixJQUF1QkEsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFlBQXBCLE1BQXNDLENBQUMsQ0FGakUsRUFHRTtBQUNBO0FBQ0FoQyxNQUFBQSxTQUFTLENBQUNTLGFBQVYsQ0FBd0JDLEtBQXhCLENBQThCQyxJQUE5QixDQUFtQyxVQUFBSSxZQUFZLEVBQUk7QUFDakRBLFFBQUFBLFlBQVksQ0FBQ2tCLFVBQWIsR0FBMEJ0QixJQUExQixDQUErQixZQUFNO0FBQ25DcEIsVUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCMEMsTUFBaEI7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtELEtBVkQsTUFVTztBQUNMO0FBQ0FwQixNQUFBQSxlQUFlLENBQUNQLEtBQUQsRUFBUVgsTUFBUixDQUFmO0FBQ0Q7QUFDRixHQWxCSCxFQW1CRzRCLEtBbkJILENBbUJTLFlBQU07QUFDWFosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0UsK0RBREY7QUFHRCxHQXZCSDtBQXdCRDs7QUFFTSxTQUFTb0IsVUFBVCxHQUFzQjtBQUMzQixNQUFJLG1CQUFtQmpDLFNBQXZCLEVBQWtDO0FBQ2hDQSxJQUFBQSxTQUFTLENBQUNTLGFBQVYsQ0FBd0JDLEtBQXhCLENBQThCQyxJQUE5QixDQUFtQyxVQUFBSSxZQUFZLEVBQUk7QUFDakRBLE1BQUFBLFlBQVksQ0FBQ2tCLFVBQWI7QUFDRCxLQUZEO0FBR0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgb3B0aW9uYWwgY29kZSBpcyB1c2VkIHRvIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIuXG4vLyByZWdpc3RlcigpIGlzIG5vdCBjYWxsZWQgYnkgZGVmYXVsdC5cblxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2Vycylcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byBhIHBhZ2UsIGFmdGVyIGFsbCB0aGVcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsIGFuZCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXG4vLyBvcHQtaW4sIHJlYWQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJbOjoxXVwiIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSBcIiArXG4gICAgICAgICAgICAgIFwid29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBXCJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gXCJpbnN0YWxsZWRcIikge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIk5ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsIFwiICtcbiAgICAgICAgICAgICAgICAgIFwidGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLlwiXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIik7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC4gSWYgaXQgY2FuJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICBmZXRjaChzd1VybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImphdmFzY3JpcHRcIikgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLlwiXG4gICAgICApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
//# sourceMappingURL=serviceWorker.js.map
