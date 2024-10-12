<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class ContentGeneratorController extends Controller
{
    public function generateContent(Request $request)
    {
        // Get a prompt or criteria from the request, you can modify this based on your needs.
        $prompt = $request->input('prompt', 'Generate some text about...');

        // Make a request to the OpenAI API to generate content.
        $result = OpenAI::completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
        ]);

        // Extract the generated text from the API response.
        $generatedText = $result['choices'][0]['text'];

        // You can return the generated text as a response or use it as needed.
        return view('content-generator', ['generatedText' => $generatedText]);
    }
}
