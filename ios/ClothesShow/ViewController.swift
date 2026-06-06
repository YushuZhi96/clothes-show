import UIKit
import WebKit

final class ViewController: UIViewController {
    private var webView: WKWebView!

    override func loadView() {
        let configuration = WKWebViewConfiguration()
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true

        webView = WKWebView(frame: .zero, configuration: configuration)
        webView.isOpaque = false
        webView.backgroundColor = .systemBackground
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        loadPrototype()
    }

    private func loadPrototype() {
        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html"),
              let resourceRoot = Bundle.main.resourceURL else {
            showMissingBundleAlert()
            return
        }

        webView.loadFileURL(indexURL, allowingReadAccessTo: resourceRoot)
    }

    private func showMissingBundleAlert() {
        let alert = UIAlertController(
            title: "Missing Prototype",
            message: "index.html was not found in the app bundle.",
            preferredStyle: .alert
        )
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        present(alert, animated: true)
    }
}
