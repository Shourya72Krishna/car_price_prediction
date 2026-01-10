import joblib
import numpy as np
import pandas as pd

model = joblib.load("model/model.pkl")
encoder = joblib.load("model/encode.pkl")

def predict_price(data):
    numerical = pd.DataFrame({
        "age": [data.age],
        "km_driven" : [data.km_driven]
    })

    X = pd.DataFrame({
        "name": [data.name],
        "fuel": [data.fuel],
        "seller_type": [data.seller_type],
        "transmission": [data.transmission],
        "owner": [data.owner]
    })

    encoded = encoder.transform(X)
    cat = X.select_dtypes(["O"]).columns
    names = encoder.get_feature_names_out(cat)
    final = pd.DataFrame(encoded, columns=names)

    df = pd.concat([numerical, final], axis=1)

    df = df[model.feature_names_in_]

    price = model.predict(df)

    return int(max(price[0],0))