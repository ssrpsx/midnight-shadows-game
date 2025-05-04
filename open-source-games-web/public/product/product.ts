export interface productProp {
    Id: string
    ProductTitle: string
    Platform: string[]
    ReleaseDate: string
    Slug: string
    Description: string
}


export const product:productProp[] = [
    {
        Id: "1",
        ProductTitle: "CyberQuest 2077",
        Platform: ["PC", "PlayStation 5", "Xbox Series X"],
        ReleaseDate: "2023-09-15",
        Slug: "cyberquest-2077",
        Description: "An action-packed sci-fi RPG set in a dystopian future."
      },
      {
        Id: "2",
        ProductTitle: "Fantasy Odyssey",
        Platform: ["PC", "Nintendo Switch"],
        ReleaseDate: "2024-03-22",
        Slug: "fantasy-odyssey",
        Description: "A captivating open-world RPG filled with magic and adventure."
      },
      {
        Id: "3",
        ProductTitle: "Speed Racer X",
        Platform: ["PC", "PlayStation 5", "Xbox One"],
        ReleaseDate: "2023-12-05",
        Slug: "speed-racer-x",
        Description: "High-octane racing with customizable vehicles and dynamic tracks."
      },
      {
        Id: "4",
        ProductTitle: "Pixel Heroes",
        Platform: ["PC", "Mobile"],
        ReleaseDate: "2022-08-14",
        Slug: "pixel-heroes",
        Description: "A pixel-art platformer with challenging levels and epic boss battles."
      },
      {
        Id: "5",
        ProductTitle: "Space Explorer 3D",
        Platform: ["PC", "Virtual Reality"],
        ReleaseDate: "2025-01-20",
        Slug: "space-explorer-3d",
        Description: "A VR space exploration game with realistic physics and stunning visuals."
      }
]