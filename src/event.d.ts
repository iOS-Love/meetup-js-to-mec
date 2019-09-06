declare namespace MeetupEvent {

    // MARK: - Common Elements

    export interface Photo {
        id: number
        highres_link: string
        photo_link: string
        thumb_link: string
        type: string
        base_url: string
    }

    export interface Member {
        id: number
        name: string
        bio: string
        photo: Photo
        role: string
    }

    // MARK: - Atendee

    export namespace Atendee {
        export namespace Self {
            export interface Group {
                id: number
                urlname: string
                name: string
                status: string
                who: string
                members: number
                join_mode: string
                group_photo: Photo
            }
        }
    
        export interface Self {
            blocks: boolean
            actions: string[]
            common: {
                groups: Self.Group[]
            }
            friends: boolean
        }
    }

    export interface Atendee extends Member {
        self: Atendee.Self
        event_context: {
            host: boolean
        }
    }

    // MARK: - Host

    export interface Host extends Member {
        host_count: number
        join_date: any
    }

    // MARK: - Group

    export interface Group {
        id: number
        created: any
        name: string
        join_mode: string
        lat: number
        lon: number
        urlname: string
        who: string
        localized_location: string
        state: string
        country: string
        region: string
        timezone: string
    }

    // MARK: - Venue

    export interface Venue {
        id: number
        name: string
        lat: number
        lon: number
        repinned: boolean
        address_1: string
        city: string
        country: string
        localized_country_name: string
        address_2: string
    }

    // MARK: - RSVPs

    export namespace RSVP {
        export interface Answer {
            answer: string
            question_id: number
            question: string
            updated: any
        }
    }
​
    export interface RSVP {
        response: string
        guests: number
        answers: RSVP.Answer[]
    }

    export interface RSVPSample {
        id: number
        created: any
        updated: any
        member: Member
    }
​
    export interface RSVPRules {
        guest_limit: number
        closed: boolean
        waitlisting: string
        open_time?: number
        close_time?: number
        refund_policy: {
            policies: any[]
            notes: string
        }
    }
}

export interface MeetupEvent {
    id: string
    name: string
    description: string    
    plain_text_no_images_description: string

    // Media
    featured_photo: MeetupEvent.Photo

    // People
    event_hosts: MeetupEvent.Host[]
    group: MeetupEvent.Group
    self: {
        role: string
        actions: string[]
        rsvp: MeetupEvent.RSVP
    }
    
    // time
    created: any
    duration: number
    time: any
    updated: any
    utc_offset: number
    local_date: string
    local_time: string
    date_in_series_pattern: boolean
    
    // Venue
    venue_visibility: string
    venue: MeetupEvent.Venue
    
    // Properties
    status: string
    visibility: string
    member_pay_fee: boolean

    // Counters
    comment_count: number
    manual_attendance_count?: number
    waitlist_count: number
    yes_rsvp_count: number
    
    // RSVP
    rsvp_close_offset: string
    rsvp_limit: number
    rsvp_open_offset: string
    rsvp_rules: MeetupEvent.RSVPRules
    rsvp_sample: MeetupEvent.RSVPSample[]

    // References
    how_to_find_us: string
    link: string
}