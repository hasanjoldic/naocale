CREATE TABLE IF NOT EXISTS public.products (
    id uuid UNIQUE NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    name TEXT UNIQUE NOT NULL,
    price NUMERIC NOT NULL CHECK (price >= 0),
    images TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    thumbnail TEXT NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to products"
ON public.products
FOR SELECT
TO public
USING (true);
