const apiRequest = async (url = '', OptionsObj = null, errMsg = null)=>{
  try {
    const response = await fetch(url, OptionsObj);
    if (!response.ok) throw Error('Please reload the app')
  } catch (err) {
      errMsg=err.message;
  } finally{
      return errMsg;
  }
}
export default apiRequest;