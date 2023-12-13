import openai
openai.api_key="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"
# function that takes in string argument as parameter 
def send_prompt(PROMPT, MaxToken=1000, outputs=1): 
	# using OpenAI's Completion module that helps execute 
	# any tasks involving text 
	response = openai.Completion.create( 
		# model name used here is text-davinci-003 
		# there are many other models available under the 
		# umbrella of GPT-3 
		model="text-davinci-003", 
		# passing the user input 
		prompt=PROMPT, 
		# generated output can have "max_tokens" number of tokens 
		max_tokens=MaxToken, 
		# number of outputs generated in one call 
		n=outputs 
	) 
	# creating a list to store all the outputs 
	output = list() 
	for k in response['choices']: 
		output.append(k['text'].strip()) 
	return output
def answer_ai(question):
	PROMPT = question
	
	res=send_prompt(PROMPT)
	return res
