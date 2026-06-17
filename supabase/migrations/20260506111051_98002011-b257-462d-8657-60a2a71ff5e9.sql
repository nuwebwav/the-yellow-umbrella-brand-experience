DROP POLICY "Anyone can submit an inquiry" ON public.inquiries;
CREATE POLICY "Anyone can submit an inquiry" ON public.inquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(mobile) BETWEEN 5 AND 20
  AND char_length(requirement) BETWEEN 1 AND 2000
);