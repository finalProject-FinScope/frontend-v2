import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";

const ManualEntryCard = ({ BaseCard }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [entryType, setEntryType] = useState("income");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie die Daten an Ihre Backend-API senden
    console.log(formData);
    setFormData({
      title: "",
      amount: "",
      category: "",
      date: "",
      description: "",
    });
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isFormOpen ? (
        <BaseCard>
          <div className="flex items-center justify-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <PlusCircle className="w-12 h-12" />
              <span className="text-sm font-medium">Neuer Eintrag</span>
            </button>
          </div>
        </BaseCard>
      ) : (
        <BaseCard>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Neuer Finanzeintrag</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4 mb-4">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md ${
                    entryType === "income"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setEntryType("income")}
                >
                  Einnahme
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md ${
                    entryType === "expense"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setEntryType("expense")}
                >
                  Ausgabe
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Titel"
                  className="w-full p-2 border rounded-md"
                  required
                />

                <div className="flex gap-4">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Betrag"
                    className="flex-1 p-2 border rounded-md"
                    required
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="flex-1 p-2 border rounded-md"
                    required
                  />
                </div>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Kategorie wählen</option>
                  {entryType === "income" ? (
                    <>
                      <option value="salary">Gehalt</option>
                      <option value="investment">Investment</option>
                      <option value="other">Sonstiges</option>
                    </>
                  ) : (
                    <>
                      <option value="rent">Miete</option>
                      <option value="utilities">Nebenkosten</option>
                      <option value="internet">Internet</option>
                      <option value="groceries">Lebensmittel</option>
                      <option value="other">Sonstiges</option>
                    </>
                  )}
                </select>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Beschreibung (optional)"
                  className="w-full p-2 border rounded-md"
                  rows="3"
                />

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Eintrag speichern
                </button>
              </div>
            </form>
          </div>
        </BaseCard>
      )}
    </div>
  );
};

export default ManualEntryCard;
