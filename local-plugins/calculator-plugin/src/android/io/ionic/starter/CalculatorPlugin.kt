package io.ionic.starter

import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONObject

class CalculatorPlugin : CordovaPlugin() {

  override fun execute(action: String, args: JSONArray, callbackContext: CallbackContext): Boolean {
    if (action == "sum") {
      val a: Double = args.getDouble(0)
      val b: Double = args.getDouble(1)

      val result = sum(a, b)

      callbackContext.success(result)
      return true
    }
    callbackContext.error("Unknown method called")
    return false
  }

  fun sum(a: Double, b: Double): JSONObject {
    return JSONObject("{" + "\"sum\" : " + (a + b) + "}")
  }
}
