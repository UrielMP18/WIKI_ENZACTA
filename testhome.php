
<?php
	/*$url = 'https://api.docconversionapi.com/convert?outputFormat=HTML';
	$fields = array(
	            'inputFile' => 'http://wikienzacta.000webhostapp.com/DOC/TestWordDoc.doc'
	        );

	//url-ify the data for the POST
	foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
	$fields_string = rtrim($fields_string,'&');

	//open connection
	$ch = curl_init();

	//set the url, number of POST vars, POST data
	//replace YOUR_APPLICATION_ID and YOUR_SECRET_KEY with your App ID and Secret Key credentials 
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	    'X-ApplicationID:4fa8e4a0-f544-4d51-9167-40fcd1d25f33',
	    'X-SecretKey:3ca80799-f84f-41cf-aa1f-ef3fb19b3b2f'
	));
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_POST,count($fields));
	curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);

	//execute post
	$result = curl_exec($ch);
	print $result;*/


    static void Main(string[] args)
                    {
            HttpClient client = new HttpClient();

            client.Timeout = new TimeSpan(1, 10, 0);

                    //Set Authenticastion headers for your request
            client.DefaultRequestHeaders.Add("X-ApplicationID", "4fa8e4a0-f544-4d51-9167-40fcd1d25f33");
            client.DefaultRequestHeaders.Add("X-SecretKey", "3ca80799-f84f-41cf-aa1f-ef3fb19b3b2f");

                    //Define file paths
                    var inputPath = @"http://wikienzacta.000webhostapp.com/DOC/TestWordDoc.doc";
                    var outputPath = @"C:\docs\convertResult.html";

                    var parameters = new { };

                    using (var content = new MultipartFormDataContent())
                    {
                    // Read input file
                    using (var fileStream = new FileStream(inputPath, FileMode.Open))
                    {
                    var stream = new MemoryStream();
                    fileStream.CopyTo(stream);
                    stream.Seek(0, SeekOrigin.Begin);

                    // Add input file content to the BODY of the REQUEST
                    content.Add(new StreamContent(stream), "inputFile", Path.GetFileName(inputPath));

                    // Add additional parameters (empty in this case)
                    content.Add(new StringContent(new JavaScriptSerializer().Serialize(parameters)),
                    "optionsJson");
                    }

                    // Call the API
                    using (var request = new HttpRequestMessage(HttpMethod.Post, @"https://api.docconversionapi.com/convert?outputFormat=HTML") { Content = content })
                    {
                    request.Headers.TryAddWithoutValidation("Content-Type", "multipart/form-data");

                    SendRequest(client, request, outputPath);
                    }
                    }
                    }

                    private static void SendRequest(HttpClient client, HttpRequestMessage request, string outputPath)
                    {
                    // Get the result
                    var result = client.SendAsync(request).Result;
            result.EnsureSuccessStatusCode();

                    // Save the result to the output path
                    using (var resultStream = result.Content.ReadAsStreamAsync().Result)
                    {
                    using (var outputStream = new FileStream(outputPath, FileMode.Create))
                    {
                    resultStream.CopyTo(outputStream);
                    }
                    }
                    }
?>
