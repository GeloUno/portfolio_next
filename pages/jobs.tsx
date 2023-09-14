import { Fragment } from 'react';
import Container from './../components/shared/container';

function Jobs() {
  return (
    <div
      className="flex-col        
        text-cyan-600 
        bg-cyan-100 
        my-5  
        mt-12
        rounded-lg        
        w-full
        h-full
        max-w-2xl
        items-center  "
    >
      <h3 className="p-4 mt-7">
        <strong>Full Stack Developer:</strong>
        <br />
        I've been programming in JavaScript and TypeScript for{' '}
        <strong>4 years.</strong>
        <br />
        The first step was getting to know the Angular framework. I joined
        Bakers in 2021 as a Full Stack Developer <strong>
          ReactJS
        </strong> and <strong>NestJS</strong>. My job included:
      </h3>
      <h3 className="p-4">
        <strong> Frontend:</strong>
        <br />
        implementation of tasks posted on the Jira platform for an application
        using ReactJS and Redux in TypeScript I added unit tests using testing
        liblary I added useQuery/TanStack Query library introduced to the
        project 2FA I improved the functioning of the interceptor and Redux
      </h3>
      <h3 className="p-4">
        <strong>Backend:</strong>
        <br />
        implementation of tasks posted on the Jira platform for an application
        made in NestJS introduction of 2FA for the backend I added unit tests, I
        started the project with 16 tests, now there are 1400 I added using
        transactions for multiple modification in mongoDB database
      </h3>
      <h3 className="p-4">
        <strong>CI/CD:</strong>
        <br />I configurations and changes for the needs of the project for
        BitBucket and AWS all kinds of repairs for Docker images
      </h3>
      <h3 className="p-4 ">
        <strong> Design:</strong>
        <br />I made a project on the Figma platform for the presentation of
        statistics and customers.
      </h3>
      <h3 className="p-4 mb-7">
        <strong>Other:</strong>
        <br />I connected the Orbitviu ALPHATABLE using a JavaScript to
        communicate with company own AWS S3 Buckets cloud.I connected a domain
        from an external provider to AWS using Route53
      </h3>
    </div>
  );
}

function JobsPage() {
  return (
    <Container title={'Jobs'} switchHorizontalView={false}>
      <Jobs />
    </Container>
  );
}

export default JobsPage;
