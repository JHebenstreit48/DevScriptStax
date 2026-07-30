import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventsAndOptions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript/EventsAndOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Events & Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventsAndOptions;
