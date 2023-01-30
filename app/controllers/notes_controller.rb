class NotesController < ApplicationController

  skip_before_action :authorize, only: [:create, :show, :index]
  before_action :set_note, only: [:show, :update, :destroy]

  # GET /notes
  def index
    @notes = Note.all
    render json: @notes
  end

  # GET /notes/1
  def show
    render json: @note
  end

  # POST /notes
  def create
    byebug
    @note = Note.new(note_params)
    if @note.save
      # render json: @note, status: :created, location: @note
      render json: NoteSerializer.new(@note).serializable_hash[:data][:attributes], status: :created, location: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.permit(:title, :verse, :church_id, :user_id, :file)
    end
end
