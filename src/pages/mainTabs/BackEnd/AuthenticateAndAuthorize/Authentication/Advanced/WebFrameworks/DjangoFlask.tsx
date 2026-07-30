import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DjangoFlask = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/DjangoFlask';

  return (
    <>
      <PageLayout>
        <PageTitle title="Django / Flask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DjangoFlask;
