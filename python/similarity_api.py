from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer, util

app = Flask(__name__)

# Load pre-trained model
model = SentenceTransformer('all-MiniLM-L6-v2')

@app.route('/match', methods=['POST'])
def match():
    data = request.get_json()
    resume = data['resume']
    job_description = data['job_description']

    # Calculate similarity score
    embeddings = model.encode([resume, job_description], convert_to_tensor=True)
    similarity = util.pytorch_cos_sim(embeddings[0], embeddings[1])
    similarity_percentage = round(float(similarity.item()) * 100, 2)

    return jsonify({'similarity_percentage': similarity_percentage})

if __name__ == '__main__':
    app.run(port=5000)
