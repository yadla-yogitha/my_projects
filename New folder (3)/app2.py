import tkinter as tk
from tkinter import colorchooser, filedialog
from PIL import Image, ImageDraw, ImageTk

class DrawingApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Drawing Application")
        self.geometry("800x600")
        self.current_color = "black"
        self.line_thickness = 2
        self.setup_ui()

    def setup_ui(self):
        self.canvas = tk.Canvas(self, bg="white")
        self.canvas.pack(fill=tk.BOTH, expand=True)

        self.color_button = tk.Button(self, text="Choose Color", command=self.choose_color)
        self.color_button.pack(side=tk.LEFT)

        self.thickness_slider = tk.Scale(self, from_=1, to=10, orient=tk.HORIZONTAL,
                                         label="Line Thickness", command=self.set_thickness)
        self.thickness_slider.pack(side=tk.LEFT, padx=10)

        self.clear_button = tk.Button(self, text="Clear Canvas", command=self.clear_canvas)
        self.clear_button.pack(side=tk.LEFT, padx=10)

        self.save_button = tk.Button(self, text="Save Drawing", command=self.save_drawing)
        self.save_button.pack(side=tk.LEFT)

        self.canvas.bind("<B1-Motion>", self.draw)

    def choose_color(self):
        color = colorchooser.askcolor(title="Choose Color")
        if color:
            self.current_color = color[1]

    def set_thickness(self, value):
        self.line_thickness = int(value)

    def draw(self, event):
        x, y = event.x, event.y
        x1, y1 = (x - self.line_thickness), (y - self.line_thickness)
        x2, y2 = (x + self.line_thickness), (y + self.line_thickness)
        self.canvas.create_oval(x1, y1, x2, y2, fill=self.current_color, outline=self.current_color)

    def clear_canvas(self):
        self.canvas.delete("all")

    def save_drawing(self):
        file_path = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG Files", "*.png")])
        if file_path:
            image = Image.new("RGB", (self.canvas.winfo_width(), self.canvas.winfo_height()), "white")
            draw = ImageDraw.Draw(image)
            self.canvas.update()
            draw.rectangle([0, 0, self.canvas.winfo_width(), self.canvas.winfo_height()], fill="white")
            draw_image = ImageTk.PhotoImage(image)
            self.canvas.create_image(0, 0, anchor=tk.NW, image=draw_image)
            image.save(file_path)

if __name__ == "__main__":
    app = DrawingApp()
    app.mainloop()
