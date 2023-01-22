@objc(CalculatorPlugin)
class CalculatorPlugin : CDVPlugin {

  @objc(sum:)
  func sum(command: CDVInvokedUrlCommand) {
    let a = command.arguments[0] as? Double ?? 0
    let b = command.arguments[1] as? Double ?? 0

    let pluginResult = CDVPluginResult(
      status: CDVCommandStatus_OK,
      messageAs: [
          "sum": a+b
      ]
    )


    self.commandDelegate!.send(
      pluginResult,
      callbackId: command.callbackId
    )
  }
}
