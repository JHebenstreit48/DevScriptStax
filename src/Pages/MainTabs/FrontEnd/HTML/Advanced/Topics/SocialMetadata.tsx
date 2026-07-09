import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SocialMetadata = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SocialMetadata';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced HTML Topics - Social Metadata" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocialMetadata;
